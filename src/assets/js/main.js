// Dark mode preference: stored in localStorage, applied before first paint
// (This script is loaded synchronously in <head> to prevent FOUC)
(function () {
  var stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") {
    document.documentElement.setAttribute("data-theme", stored);
  }
})();

// Analytics event bus.
// Fires CustomEvents on document. Attach listeners in any analytics script.
// Also forwards to window.plausible (Plausible Analytics) and window.dataLayer (GTM) if present.
// Usage: NAT.track("essay:scroll_depth", { depth: 50, slug: "cartography-of-control" })
window.NAT = (function () {
  function track(name, props) {
    var detail = Object.assign({ ts: Date.now() }, props || {});
    try {
      document.dispatchEvent(new CustomEvent("nat:track", { detail: { name: name, props: detail } }));
    } catch (_) {}
    if (typeof window.plausible === "function") {
      try { window.plausible(name, { props: detail }); } catch (_) {}
    }
    if (Array.isArray(window.dataLayer)) {
      try { window.dataLayer.push({ event: name, natProps: detail }); } catch (_) {}
    }
  }
  return { track: track };
})();

document.addEventListener("DOMContentLoaded", function () {
  // Copy link button (post share)
  var copyBtn = document.getElementById("share-copy");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var url = copyBtn.getAttribute("data-url") || window.location.href;
      var orig = copyBtn.textContent;
      function confirm() {
        copyBtn.textContent = "Copied";
        setTimeout(function () { copyBtn.textContent = orig; }, 2000);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(confirm).catch(function () {
          fallbackCopy(url, confirm);
        });
      } else {
        fallbackCopy(url, confirm);
      }
    });
  }

  function fallbackCopy(text, cb) {
    var input = document.createElement("input");
    input.value = text;
    input.className = "offscreen";
    document.body.appendChild(input);
    input.select();
    try { document.execCommand("copy"); cb(); } catch (_) {}
    document.body.removeChild(input);
  }

  // Scroll-triggered quiz bar (post pages only, one per session)
  var postBody = document.querySelector(".post-body");
  if (postBody && !sessionStorage.getItem("quiz-bar-dismissed")) {
    var bar = document.createElement("div");
    bar.className = "quiz-bar";
    bar.setAttribute("role", "complementary");
    bar.setAttribute("aria-label", "Take the consistency quiz");
    bar.innerHTML =
      '<span class="quiz-bar-text">If this holds, the quiz will find where it doesn’t.</span>' +
      '<a class="quiz-bar-link" href="/quiz/">Consistency quiz →</a>' +
      '<button class="quiz-bar-dismiss" type="button" aria-label="Dismiss">×</button>';
    document.body.appendChild(bar);

    bar.querySelector(".quiz-bar-dismiss").addEventListener("click", function () {
      bar.classList.remove("quiz-bar--visible");
      sessionStorage.setItem("quiz-bar-dismissed", "1");
    });

    var trigger = document.querySelector(".post-footer") || postBody.lastElementChild;
    function checkTrigger() {
      if (!trigger) return;
      var r = trigger.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        bar.classList.add("quiz-bar--visible");
        window.removeEventListener("scroll", checkTrigger, { passive: true });
      }
    }
    window.addEventListener("scroll", checkTrigger, { passive: true });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          bar.classList.add("quiz-bar--visible");
        }
      }, { threshold: 0.1 }).observe(trigger);
    }
  }

  // Theme toggle
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      var isDark =
        current === "dark" ||
        (!current && window.matchMedia("(prefers-color-scheme: dark)").matches);
      var next = isDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      toggle.setAttribute("aria-label", isDark ? "Switch to dark mode" : "Switch to light mode");
      toggle.textContent = isDark ? "Dark" : "Light";
    });
  }

  // Reading progress bar (post pages only). Uses SVG width attr (CSP-safe).
  var bar = document.getElementById("reading-progress");
  var fill = document.getElementById("reading-progress-fill");
  var body = document.querySelector(".post-body");
  if (bar && fill && body) {
    bar.classList.add("visible");
    var update = function () {
      var bodyRect = body.getBoundingClientRect();
      var scrolled = Math.max(0, -bodyRect.top);
      var total = Math.max(1, body.offsetHeight - window.innerHeight);
      var pct = Math.min(100, Math.round((scrolled / total) * 100));
      fill.setAttribute("width", String(pct));
      bar.setAttribute("aria-valuenow", String(pct));
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  // Keyboard navigation: j/k to move between posts on list pages
  var links = Array.from(document.querySelectorAll(".post-list-item-title a"));
  if (links.length > 0) {
    document.addEventListener("keydown", function (e) {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      var active = document.activeElement;
      var idx = links.indexOf(active);
      if (e.key === "j") {
        e.preventDefault();
        var next = idx < links.length - 1 ? links[idx + 1] : links[0];
        next.focus();
      } else if (e.key === "k") {
        e.preventDefault();
        var prev = idx > 0 ? links[idx - 1] : links[links.length - 1];
        prev.focus();
      } else if (e.key === "o" && idx >= 0) {
        e.preventDefault();
        links[idx].click();
      }
    });
  }

  // Quant UX: scroll depth milestones on essay pages.
  // Fires at 25 / 50 / 75 / 100 percent of the post body.
  (function () {
    var postBody = document.querySelector(".post-body");
    if (!postBody) return;
    var slug = window.location.pathname.replace(/^\/|\/$/g, "") || "home";
    var milestones = [25, 50, 75, 100];
    var fired = {};
    function checkDepth() {
      var rect = postBody.getBoundingClientRect();
      var scrolled = Math.max(0, -rect.top);
      var total = Math.max(1, postBody.offsetHeight - window.innerHeight);
      var pct = Math.min(100, Math.round((scrolled / total) * 100));
      for (var i = 0; i < milestones.length; i++) {
        var m = milestones[i];
        if (!fired[m] && pct >= m) {
          fired[m] = true;
          NAT.track("essay:scroll_depth", { depth: m, slug: slug });
        }
      }
    }
    window.addEventListener("scroll", checkDepth, { passive: true });
    checkDepth();
  })();

  // Quant UX: time-on-page. Fires at 30s, 60s, 120s, 300s for essay pages.
  // Also fires on pagehide with total engaged time.
  (function () {
    var postBody = document.querySelector(".post-body");
    if (!postBody) return;
    var slug = window.location.pathname.replace(/^\/|\/$/g, "") || "home";
    var startTime = Date.now();
    var engagedTime = 0;
    var lastActive = Date.now();
    var IDLE_THRESHOLD = 30000; // 30s idle = not engaged
    var timeMilestones = [30, 60, 120, 300];
    var firedTime = {};

    function tick() {
      var now = Date.now();
      var delta = now - lastActive;
      if (delta < IDLE_THRESHOLD) {
        engagedTime += Math.min(delta, 1000);
      }
      lastActive = now;
      var secs = Math.round(engagedTime / 1000);
      for (var i = 0; i < timeMilestones.length; i++) {
        var m = timeMilestones[i];
        if (!firedTime[m] && secs >= m) {
          firedTime[m] = true;
          NAT.track("essay:time_on_page", { seconds: m, slug: slug });
        }
      }
    }

    var tickInterval = setInterval(tick, 1000);
    ["mousemove", "keydown", "scroll", "click", "touchstart"].forEach(function (evt) {
      window.addEventListener(evt, function () { lastActive = Date.now(); }, { passive: true });
    });

    window.addEventListener("pagehide", function () {
      clearInterval(tickInterval);
      tick();
      NAT.track("essay:exit", {
        slug: slug,
        engaged_seconds: Math.round(engagedTime / 1000),
        total_seconds: Math.round((Date.now() - startTime) / 1000),
      });
    });
  })();

  // Quant UX: track outbound clicks from homepage pattern section.
  (function () {
    var patternLinks = document.querySelectorAll(".home-pattern-mechanism a");
    patternLinks.forEach(function (a) {
      a.addEventListener("click", function () {
        NAT.track("home:pattern_click", { href: a.getAttribute("href"), text: a.textContent.trim() });
      });
    });
    var heroQuizCta = document.querySelector(".home-hero-cta");
    if (heroQuizCta) {
      heroQuizCta.addEventListener("click", function () {
        NAT.track("home:quiz_cta_click", { location: "hero" });
      });
    }
  })();

  // Quant UX: quiz page. Track start (first question rendered) and completion.
  // Hooks into the quiz shell via MutationObserver so it doesn't depend on quiz.js internals.
  (function () {
    var quizShell = document.getElementById("quiz-stage");
    if (!quizShell) return;
    var started = false;
    var observer = new MutationObserver(function (mutations) {
      if (!started && quizShell.children.length > 0) {
        started = true;
        NAT.track("quiz:started", {});
      }
      // Detect completion: quiz renders a results/summary node with no answer buttons
      for (var i = 0; i < mutations.length; i++) {
        var added = mutations[i].addedNodes;
        for (var j = 0; j < added.length; j++) {
          var node = added[j];
          if (node.nodeType === 1 && node.querySelector && node.querySelector(".quiz-result")) {
            NAT.track("quiz:completed", {});
          }
        }
      }
    });
    observer.observe(quizShell, { childList: true, subtree: true });
  })();
});
