(function () {
  "use strict";

  // =========================================================================
  // STATE
  // =========================================================================

  var state = {
    answers: {},           // { questionId: 'yes' | 'no' | 'skip' }
    tags: [],              // accumulated tag strings
    qIdx: 0,               // current question index
    phase: "quiz",         // "quiz" | "conflict" | "result"
    conflictQueue: [],     // contradiction IDs waiting to be shown
    activeConflict: null,  // contradiction ID currently displayed
    dismissed: [],         // contradiction IDs the user acknowledged (counted in score)
    resolved: [],          // contradiction IDs the user resolved by flipping an answer (not counted)
    disagreements: []      // { conflictId, text, contact, ts }
  };

  // =========================================================================
  // HELPERS
  // =========================================================================

  function getStage() {
    return document.getElementById("quiz-stage");
  }

  function getQuestion(id) {
    for (var i = 0; i < QUIZ_QUESTIONS.length; i++) {
      if (QUIZ_QUESTIONS[i].id === id) return QUIZ_QUESTIONS[i];
    }
    return null;
  }

  function getContradiction(id) {
    for (var i = 0; i < QUIZ_CONTRADICTIONS.length; i++) {
      if (QUIZ_CONTRADICTIONS[i].id === id) return QUIZ_CONTRADICTIONS[i];
    }
    return null;
  }

  function totalAnswered() {
    var n = 0;
    for (var k in state.answers) {
      if (state.answers[k] !== "skip") n++;
    }
    return n;
  }

  function pct(n, d) {
    return d === 0 ? 0 : Math.round((n / d) * 100);
  }

  // =========================================================================
  // CONTRADICTION DETECTION
  // =========================================================================

  function checkContradictionsForQuestion(qId) {
    var newIds = [];
    for (var i = 0; i < QUIZ_CONTRADICTIONS.length; i++) {
      var c = QUIZ_CONTRADICTIONS[i];
      if (state.dismissed.indexOf(c.id) !== -1) continue;
      if (state.resolved.indexOf(c.id) !== -1) continue;
      if (state.conflictQueue.indexOf(c.id) !== -1) continue;
      if (c.id === state.activeConflict) continue;
      var involvesQ = false;
      for (var j = 0; j < c.conditions.length; j++) {
        if (c.conditions[j].q === qId) { involvesQ = true; break; }
      }
      if (!involvesQ) continue;
      var allMet = true;
      for (var k = 0; k < c.conditions.length; k++) {
        if (state.answers[c.conditions[k].q] !== c.conditions[k].a) {
          allMet = false; break;
        }
      }
      if (allMet) newIds.push(c.id);
    }
    return newIds;
  }

  // =========================================================================
  // TAGS
  // =========================================================================

  function addTagsForAnswer(q, answer) {
    var tags = answer === "yes" ? q.yesTags : answer === "no" ? q.noTags : [];
    for (var i = 0; i < tags.length; i++) state.tags.push(tags[i]);
  }

  function removeTagsForAnswer(q, answer) {
    var tags = answer === "yes" ? q.yesTags : answer === "no" ? q.noTags : [];
    for (var i = 0; i < tags.length; i++) {
      var idx = state.tags.indexOf(tags[i]);
      if (idx !== -1) state.tags.splice(idx, 1);
    }
  }

  // =========================================================================
  // DIAGNOSIS
  // =========================================================================

  var DIAGNOSES = {

    PRINCIPLED_LIBERTARIAN: {
      title: "The Principled Libertarian",
      verdict: "You apply skepticism of state power consistently, regardless of which political team is holding the lever.",
      body: "Your answers reflect a coherent analytical framework: you distrust concentrated power whether it is held by a corporation or a government, but you recognize that the government's power is categorically different because it is backed by legal force. You see regulatory capture not as an aberration but as the predictable outcome of giving any institution authority over the industries it depends on for staffing and funding. The consistency here is the rarest thing in political discourse."
    },

    STRUCTURAL_SKEPTIC: {
      title: "The Structural Skeptic",
      verdict: "You see the system is captured. You are still figuring out what to do about it that does not involve feeding the machine.",
      body: "You recognize that regulatory agencies, campaign finance rules, trade policy, and criminal law are shaped by concentrated interests using the mechanisms of the state. You are skeptical of simple 'more government' solutions because you understand that government is not a neutral actor. You have not fully resolved what structural alternatives look like, but you are asking the right questions: who controls this institution, who benefits from this rule, and who pays the costs that never appear in the official accounting."
    },

    BLEEDING_HEART: {
      title: "The Bleeding Heart",
      verdict: "You want outcomes the system consistently fails to deliver, and you are not sure why it keeps failing.",
      body: "You care about the people who end up at the bottom of every policy outcome: the uninsured patient, the person sentenced by a mandatory minimum, the family displaced by a housing shortage. Your instincts are often correct about who is being harmed. The gap in your framework is structural: you identify the people being hurt but default to the institution doing the hurting as the source of the solution. The question is not whether you care about these outcomes. It is whether the institutions you want to fix them are structurally capable of doing so."
    },

    CAPTURED_REFORMER: {
      title: "The Captured Reformer",
      verdict: "You want the system fixed by the people who benefit from it staying broken.",
      body: "You see real problems in housing, healthcare, education, and the financial system. Your proposed solutions consistently run through the institutions most responsible for producing those problems. You want more financial regulation from captured regulators, more educational funding for institutions whose costs have been inflated by federal money, and more healthcare policy from an industry that has written most of its own regulations. You are not wrong about the problems. You have inherited a solution-set that has not been examined at the structural level."
    },

    STATIST_CONSISTENT: {
      title: "The Consistent Statist",
      verdict: "You believe government authority is the correct tool for most social problems and you apply that belief consistently.",
      body: "You support government intervention across most domains: economic regulation, drug enforcement, surveillance, foreign military action, and social policy. Your framework is internally coherent in that you apply it consistently. The question this quiz cannot answer for you is whether the institutions executing that authority are structured to produce the outcomes you want, or whether the pattern of outcomes across decades suggests something about the structural constraints those institutions operate under."
    },

    SELECTIVE_STATIST: {
      title: "The Selective Statist",
      verdict: "You trust coercive institutions when they serve your values. You oppose them when they do not.",
      body: "Your answers show a pattern of endorsing state authority in the domains where you like the outcomes and opposing it in the domains where you do not. This is an extremely common position and an analytically unstable one. The same FDA that blocks a drug you distrust also blocks a drug you want access to. The same surveillance apparatus that monitors people you are concerned about also monitors whistleblowers and journalists. The question is not whether you trust this institution with this specific power today. It is whether you are comfortable with that power existing in a system where you will not always be on the preferred side of who holds it."
    },

    COGNITIVE_PRISONER: {
      title: "The Cognitive Prisoner",
      verdict: "The analytical framework you inherited to critique the system is the framework the system provided.",
      body: "Your answers contain a high number of tensions that you were not able to resolve in a single direction. This is not a moral failure. It is the expected output of a political education that presents state institutions as the solution to problems those same institutions produce, that frames corporate monopoly as a market failure rather than a legal construction, and that teaches people to advocate for captured agencies to have more authority over the industries that captured them. The contradictions in your answers are not yours. They were installed. The interesting question is what your actual values are underneath them."
    }

  };

  function computeDiagnosis() {
    var counts = { s: 0, l: 0, x: 0, b: 0, r: 0 };
    for (var i = 0; i < state.tags.length; i++) {
      var t = state.tags[i];
      if (counts[t] !== undefined) counts[t]++;
    }
    var total = Math.max(state.tags.length, 1);
    var pS = counts.s / total;
    var pL = counts.l / total;
    var pX = counts.x / total;
    var pB = counts.b / total;
    var contradictions = state.dismissed.length;

    if (contradictions >= 7) return "COGNITIVE_PRISONER";
    if (pL > 0.42 && pS < 0.15) return "PRINCIPLED_LIBERTARIAN";
    if (pX > 0.30 && pS < 0.20 && contradictions < 4) return "STRUCTURAL_SKEPTIC";
    if (pB > 0.18 && pX > 0.12 && pS < 0.32) return "BLEEDING_HEART";
    if (pS > 0.40 && contradictions <= 2) return "STATIST_CONSISTENT";
    if (pS > 0.30 && contradictions >= 3) return "SELECTIVE_STATIST";
    return "CAPTURED_REFORMER";
  }

  // =========================================================================
  // ANIMATION
  // =========================================================================

  function reduced() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function fadeOut(el, cb) {
    if (reduced()) { cb(); return; }
    el.dataset.anim = "out";
    setTimeout(function () {
      cb();
      el.dataset.anim = "in";
    }, 150);
  }

  function fadeIn(el) {
    if (reduced()) {
      delete el.dataset.anim;
      return;
    }
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        delete el.dataset.anim;
      });
    });
  }

  // =========================================================================
  // RENDER HELPERS
  // =========================================================================

  function buildHeader(stepLabel, categoryLabel) {
    var answered = state.qIdx;
    var total = QUIZ_QUESTIONS.length;
    var progress = pct(answered, total);
    var conflictCount = state.dismissed.length;

    var conflictSpan = conflictCount > 0
      ? '<span class="qz-conflict-count" aria-label="' + conflictCount + ' tension' + (conflictCount === 1 ? "" : "s") + ' acknowledged">' + conflictCount + " tension" + (conflictCount === 1 ? "" : "s") + "</span>"
      : "";

    return (
      '<div class="qz-header">' +
        '<div class="qz-meta">' +
          '<span class="qz-category">' + escHtml(categoryLabel) + "</span>" +
          '<span class="qz-step">' + escHtml(stepLabel) + "</span>" +
          conflictSpan +
        "</div>" +
        '<div class="qz-progress" role="progressbar" aria-valuenow="' + progress + '" aria-valuemin="0" aria-valuemax="100" aria-label="Quiz progress: ' + progress + '%">' +
          '<svg class="qz-progress-svg" viewBox="0 0 100 1" preserveAspectRatio="none" aria-hidden="true">' +
            '<rect class="qz-progress-fill" x="0" y="0" width="' + progress + '" height="1"></rect>' +
          "</svg>" +
        "</div>" +
      "</div>"
    );
  }

  function escHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // =========================================================================
  // RENDER: QUESTION
  // =========================================================================

  function renderQuestion(idx) {
    if (idx >= QUIZ_QUESTIONS.length) {
      renderResult();
      return;
    }
    var q = QUIZ_QUESTIONS[idx];
    var stage = getStage();
    var stepLabel = "Q " + (idx + 1) + " of " + QUIZ_QUESTIONS.length;

    var footnoteHtml = q.footnote
      ? '<details class="qz-footnote">' +
          '<summary class="qz-footnote-toggle">Context &amp; sources</summary>' +
          '<p class="qz-footnote-body">' + escHtml(q.footnote) + "</p>" +
        "</details>"
      : "";

    var backBtn = idx > 0
      ? '<button class="qz-link-btn qz-back-btn" type="button" id="qz-back" aria-label="Go back to previous question">&larr; Back</button>'
      : '<span class="qz-back-placeholder"></span>';

    var EARLY_THRESHOLD = 15;
    var earlyReady = (idx + 1) >= EARLY_THRESHOLD;
    var earlyPct = Math.min(100, Math.round(((idx + 1) / EARLY_THRESHOLD) * 100));
    var earlyHtml;
    if (earlyReady) {
      earlyHtml =
        '<div class="qz-early-result qz-early-result--ready">' +
          '<button class="qz-link-btn qz-early-btn" id="qz-see-results" type="button">Wrap up and see your result</button>' +
        '</div>';
    } else {
      earlyHtml =
        '<div class="qz-early-result qz-early-result--building">' +
          '<div class="qz-early-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + earlyPct + '" aria-label="Progress toward early result: ' + (idx + 1) + ' of ' + EARLY_THRESHOLD + ' questions">' +
            '<svg class="qz-early-svg" viewBox="0 0 100 1" preserveAspectRatio="none" aria-hidden="true">' +
              '<rect class="qz-early-fill" x="0" y="0" width="' + earlyPct + '" height="1"></rect>' +
            '</svg>' +
          '</div>' +
          '<span class="qz-early-label">' + (idx + 1) + ' / ' + EARLY_THRESHOLD + ' for early result</span>' +
        '</div>';
    }

    var html =
      buildHeader(stepLabel, q.category) +
      '<div class="qz-question-wrap">' +
        '<p class="qz-question-text" id="qz-q-label">' + escHtml(q.text) + "</p>" +
        footnoteHtml +
        '<div class="qz-yn-row" role="group" aria-labelledby="qz-q-label">' +
          '<button class="qz-btn qz-btn-yes" type="button" data-answer="yes" aria-label="Yes">Yes<span class="qz-key-hint" aria-hidden="true">Y</span></button>' +
          '<button class="qz-btn qz-btn-no" type="button" data-answer="no" aria-label="No">No<span class="qz-key-hint" aria-hidden="true">N</span></button>' +
        "</div>" +
        '<div class="qz-skip-row">' +
          '<button class="qz-btn-skip" type="button" data-answer="skip" aria-label="Skip this question">Skip <span class="qz-key-hint" aria-hidden="true">S</span></button>' +
        '</div>' +
        '<div class="qz-secondary-row">' + backBtn + '</div>' +
      "</div>" +
      earlyHtml;

    fadeOut(stage, function () {
      stage.innerHTML = html;
      stage.removeAttribute("aria-label");
      fadeIn(stage);
    });
  }

  // =========================================================================
  // RENDER: CONFLICT
  // =========================================================================

  function renderConflict(cid) {
    var c = getContradiction(cid);
    if (!c) { advanceAfterConflict(); return; }

    var cond0 = c.conditions[0];
    var cond1 = c.conditions[1];
    var q0 = getQuestion(cond0.q);
    var q1 = getQuestion(cond1.q);

    // tension counter: how many in this batch (already dismissed this answer + queue remaining)
    var totalThisBatch = 1 + state.conflictQueue.length;
    var posThisBatch = 1; // current is always position 1 of what's left
    // count how many tensions have been shown since last question advance
    // (dismissed length minus what was dismissed before this answer)
    var counterHtml = totalThisBatch > 1
      ? '<span class="qz-conflict-counter" aria-label="' + totalThisBatch + ' tensions from this answer">' + totalThisBatch + ' tensions</span>'
      : "";

    var sourceHtml = c.source
      ? '<p class="qz-conflict-source"><strong>Sources:</strong> ' + escHtml(c.source) + "</p>"
      : "";

    var stage = getStage();
    var html =
      '<div class="qz-conflict" role="region" aria-labelledby="qz-conflict-title">' +
        '<div class="qz-conflict-header">' +
          '<div class="qz-conflict-header-row">' +
            '<span class="qz-conflict-label">A tension in your answers</span>' +
            counterHtml +
          '</div>' +
          '<h2 class="qz-conflict-title" id="qz-conflict-title">' + escHtml(c.title) + "</h2>" +
        "</div>" +
        '<div class="qz-conflict-positions" aria-label="Your conflicting positions">' +
          '<div class="qz-conflict-pos">' +
            '<span class="qz-pos-answer qz-pos-answer--' + cond0.a + '">' + cond0.a.toUpperCase() + "</span>" +
            '<p class="qz-pos-text">' + escHtml(q0 ? q0.text : cond0.q) + "</p>" +
            '<button class="qz-btn qz-btn-change" type="button" data-flip="0" aria-label="Change this answer to ' + (cond0.a === "yes" ? "No" : "Yes") + '">' +
              "Change to " + (cond0.a === "yes" ? "No" : "Yes") +
            "</button>" +
          "</div>" +
          '<div class="qz-conflict-pos">' +
            '<span class="qz-pos-answer qz-pos-answer--' + cond1.a + '">' + cond1.a.toUpperCase() + "</span>" +
            '<p class="qz-pos-text">' + escHtml(q1 ? q1.text : cond1.q) + "</p>" +
            '<button class="qz-btn qz-btn-change" type="button" data-flip="1" aria-label="Change this answer to ' + (cond1.a === "yes" ? "No" : "Yes") + '">' +
              "Change to " + (cond1.a === "yes" ? "No" : "Yes") +
            "</button>" +
          "</div>" +
        "</div>" +
        '<div class="qz-conflict-body" role="note">' +
          '<p>' + escHtml(c.body) + "</p>" +
          sourceHtml +
        "</div>" +
        '<div class="qz-disagree-form" id="qz-disagree-form" aria-label="Optional: share your perspective with NA">' +
          '<p class="qz-disagree-prompt">Think this framing is wrong?</p>' +
          '<textarea class="qz-disagree-textarea" id="qz-disagree-text" rows="3" placeholder="Your reasoning…"></textarea>' +
          '<div class="qz-contact-field">' +
            '<div class="qz-contact-tabs" role="group" aria-label="How to reach you">' +
              '<button class="qz-contact-tab qz-contact-tab--active" type="button" id="qz-tab-email" aria-pressed="true">Email</button>' +
              '<button class="qz-contact-tab" type="button" id="qz-tab-other" aria-pressed="false">Other</button>' +
            '</div>' +
            '<input class="qz-disagree-input" id="qz-contact-email" type="email" autocomplete="email" placeholder="you@example.com">' +
            '<input class="qz-disagree-input" id="qz-contact-alt" type="text" placeholder="Signal, Mastodon, etc." hidden>' +
            '<span class="qz-contact-hint">so NA can reply (optional)</span>' +
          '</div>' +
          '<button class="qz-btn qz-btn-send-note" type="button" id="qz-submit-note" disabled aria-disabled="true">Send note and continue</button>' +
        "</div>" +
        '<div class="qz-conflict-actions">' +
          '<button class="qz-btn qz-btn-dismiss" type="button" id="qz-dismiss">' +
            (state.conflictQueue.length > 0 ? "Continue to next tension" : "Continue") +
          '</button>' +
        "</div>" +
      "</div>";

    fadeOut(stage, function () {
      stage.innerHTML = html;
      stage.setAttribute("aria-label", "Tension: " + c.title);
      fadeIn(stage);
      var firstFocus = stage.querySelector(".qz-btn-change");
      if (firstFocus) firstFocus.focus();
      wireDisagreeForm();
    });
  }

  function wireDisagreeForm() {
    function updateSendBtn() {
      var ta = document.getElementById("qz-disagree-text");
      var emailEl = document.getElementById("qz-contact-email");
      var altEl = document.getElementById("qz-contact-alt");
      var btn = document.getElementById("qz-submit-note");
      if (!ta || !btn) return;
      var hasText = ta.value.trim().length > 0;
      var contact = (altEl && !altEl.hidden)
        ? (altEl.value.trim())
        : (emailEl ? emailEl.value.trim() : "");
      var ok = hasText && contact.length > 0;
      btn.disabled = !ok;
      btn.setAttribute("aria-disabled", ok ? "false" : "true");
    }
    ["input", "change"].forEach(function (evt) {
      var ta = document.getElementById("qz-disagree-text");
      var em = document.getElementById("qz-contact-email");
      var alt = document.getElementById("qz-contact-alt");
      if (ta) ta.addEventListener(evt, updateSendBtn);
      if (em) em.addEventListener(evt, updateSendBtn);
      if (alt) alt.addEventListener(evt, updateSendBtn);
    });
  }

  // =========================================================================
  // RENDER: RESULT
  // =========================================================================

  function renderResult() {
    state.phase = "result";
    var key = computeDiagnosis();
    var d = DIAGNOSES[key];

    var answeredQs = QUIZ_QUESTIONS.filter(function (q) {
      return state.answers[q.id] && state.answers[q.id] !== "skip";
    });
    var yesCount = answeredQs.filter(function (q) { return state.answers[q.id] === "yes"; }).length;
    var noCount = answeredQs.filter(function (q) { return state.answers[q.id] === "no"; }).length;
    var skipCount = QUIZ_QUESTIONS.filter(function (q) { return state.answers[q.id] === "skip"; }).length;
    var conflictCount = state.dismissed.length;

    var statsHtml =
      '<ul class="qz-result-stats" aria-label="Your quiz statistics">' +
        '<li><span class="qz-stat-val">' + yesCount + "</span><span class=\"qz-stat-label\">Yes</span></li>" +
        '<li><span class="qz-stat-val">' + noCount + '</span><span class="qz-stat-label">No</span></li>' +
        '<li><span class="qz-stat-val">' + skipCount + "</span><span class=\"qz-stat-label\">Skipped</span></li>" +
        '<li><span class="qz-stat-val">' + conflictCount + "</span><span class=\"qz-stat-label\">" + (conflictCount === 1 ? "Tension" : "Tensions") + "</span></li>" +
      "</ul>";

    var stage = getStage();
    var html =
      '<div class="qz-result">' +
        '<div class="qz-result-label">Your diagnosis</div>' +
        '<h2 class="qz-result-title">' + escHtml(d.title) + "</h2>" +
        '<blockquote class="qz-result-verdict">' + escHtml(d.verdict) + "</blockquote>" +
        statsHtml +
        '<div class="qz-result-body">' + escHtml(d.body) + "</div>" +
        '<div class="qz-result-actions">' +
          '<button class="qz-btn qz-btn-restart" type="button" id="qz-restart">Start over</button>' +
        "</div>" +
      "</div>";

    var stage2 = getStage();
    fadeOut(stage2, function () {
      stage2.innerHTML = html;
      stage2.removeAttribute("aria-label");
      fadeIn(stage2);
      var title = stage2.querySelector(".qz-result-title");
      if (title) title.focus();
    });
  }

  // =========================================================================
  // ANSWER SUBMISSION
  // =========================================================================

  function submitAnswer(qId, answer) {
    var q = getQuestion(qId);
    if (!q) return;

    state.answers[qId] = answer;
    if (answer !== "skip") addTagsForAnswer(q, answer);

    var newConflicts = answer !== "skip" ? checkContradictionsForQuestion(qId) : [];
    for (var i = 0; i < newConflicts.length; i++) {
      state.conflictQueue.push(newConflicts[i]);
    }

    state.qIdx++;

    if (state.conflictQueue.length > 0) {
      state.phase = "conflict";
      state.activeConflict = state.conflictQueue.shift();
      renderConflict(state.activeConflict);
    } else if (state.qIdx >= QUIZ_QUESTIONS.length) {
      renderResult();
    } else {
      state.phase = "quiz";
      renderQuestion(state.qIdx);
    }
  }

  // =========================================================================
  // ANSWER FLIP
  // =========================================================================

  function flipAnswerInConflict(conditionIndex) {
    var c = getContradiction(state.activeConflict);
    if (!c) return;
    var cond = c.conditions[conditionIndex];
    var q = getQuestion(cond.q);
    if (!q) return;

    var prev = state.answers[cond.q];
    if (prev && prev !== "skip") removeTagsForAnswer(q, prev);

    var newAnswer = (prev === "yes") ? "no" : "yes";
    state.answers[cond.q] = newAnswer;
    addTagsForAnswer(q, newAnswer);

    // Resolved by changing answer; does not count toward the acknowledged-tension score
    state.resolved.push(state.activeConflict);
    state.activeConflict = null;

    // Drop any queued conflicts whose conditions are no longer all met after the flip
    state.conflictQueue = state.conflictQueue.filter(function(cid) {
      var c2 = getContradiction(cid);
      if (!c2) return false;
      for (var ci = 0; ci < c2.conditions.length; ci++) {
        if (state.answers[c2.conditions[ci].q] !== c2.conditions[ci].a) return false;
      }
      return true;
    });

    // Check whether the flipped answer creates any new contradictions with prior answers
    var newConflicts = checkContradictionsForQuestion(cond.q);
    for (var nc = 0; nc < newConflicts.length; nc++) {
      state.conflictQueue.push(newConflicts[nc]);
    }

    advanceAfterConflict();
  }

  // =========================================================================
  // BACK NAVIGATION
  // =========================================================================

  function goBack() {
    if (state.qIdx <= 0) return;
    // The last answered question is the one before current display position
    var prevIdx = state.qIdx - 1;
    var prevQ = QUIZ_QUESTIONS[prevIdx];
    if (prevQ) {
      var prevAnswer = state.answers[prevQ.id];
      if (prevAnswer && prevAnswer !== "skip") {
        removeTagsForAnswer(prevQ, prevAnswer);
      }
      delete state.answers[prevQ.id];
    }
    state.qIdx = prevIdx;
    state.phase = "quiz";
    renderQuestion(prevIdx);
  }

  // =========================================================================
  // CONFLICT RESOLUTION
  // =========================================================================

  function dismissConflict() {
    if (state.activeConflict) {
      state.dismissed.push(state.activeConflict);
      state.activeConflict = null;
    }
    advanceAfterConflict();
  }

  function advanceAfterConflict() {
    if (state.conflictQueue.length > 0) {
      state.activeConflict = state.conflictQueue.shift();
      renderConflict(state.activeConflict);
    } else if (state.qIdx >= QUIZ_QUESTIONS.length) {
      renderResult();
    } else {
      state.phase = "quiz";
      renderQuestion(state.qIdx);
    }
  }

  function saveDisagreement(text, contact) {
    var record = {
      conflictId: state.activeConflict,
      text: text,
      contact: contact,
      ts: new Date().toISOString()
    };
    state.disagreements.push(record);

    // Persist locally so no note is ever lost if the fetch fails
    try {
      var stored = JSON.parse(localStorage.getItem("qz_disagree") || "[]");
      stored.push(record);
      localStorage.setItem("qz_disagree", JSON.stringify(stored));
    } catch (e) {}

    // Ship to backend (Cloudflare Pages Function). Fire-and-forget; failure is silent
    // because the note is already saved locally above.
    try {
      fetch("/api/disagree", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record)
      });
    } catch (e) {}

    dismissConflict();
  }

  // =========================================================================
  // KEYBOARD NAVIGATION
  // =========================================================================

  function setupKeyboard(stage) {
    stage.addEventListener("keydown", function (e) {
      if (state.phase === "conflict") return;
      var key = e.key;
      if (key === "y" || key === "Y") {
        var yes = stage.querySelector(".qz-btn-yes");
        if (yes) yes.click();
      } else if (key === "n" || key === "N") {
        var no = stage.querySelector(".qz-btn-no");
        if (no) no.click();
      } else if (key === "s" || key === "S") {
        var skip = stage.querySelector(".qz-btn-skip");
        if (skip) skip.click();
      }
      if (key === "ArrowDown" || key === "ArrowRight") {
        var btns = Array.from(stage.querySelectorAll(".qz-btn, .qz-btn-skip"));
        if (!btns.length) return;
        var idx = btns.indexOf(document.activeElement);
        var next = btns[Math.min(idx + 1, btns.length - 1)];
        if (next) { e.preventDefault(); next.focus(); }
      }
      if (key === "ArrowUp" || key === "ArrowLeft") {
        var btns2 = Array.from(stage.querySelectorAll(".qz-btn, .qz-btn-skip"));
        if (!btns2.length) return;
        var idx2 = btns2.indexOf(document.activeElement);
        var prev = btns2[Math.max(idx2 - 1, 0)];
        if (prev) { e.preventDefault(); prev.focus(); }
      }
    });
  }

  // =========================================================================
  // EVENT DELEGATION
  // =========================================================================

  function attachEvents(stage) {
    stage.addEventListener("click", function (e) {
      var target = e.target;

      // Answer buttons (quiz phase)
      if (target.dataset.answer || (target.closest && target.closest("[data-answer]"))) {
        var answerEl = target.dataset.answer ? target : target.closest("[data-answer]");
        var answer = answerEl.dataset.answer;
        var q = QUIZ_QUESTIONS[state.qIdx];
        if (!q) return;
        answerEl.classList.add("qz-btn--chosen");
        var allAnsBtns = stage.querySelectorAll("[data-answer]");
        for (var ai = 0; ai < allAnsBtns.length; ai++) {
          allAnsBtns[ai].setAttribute("disabled", "");
        }
        setTimeout(function () { submitAnswer(q.id, answer); }, 100);
        return;
      }

      // Back button
      if (target.id === "qz-back") {
        goBack();
        return;
      }

      // Flip answer in conflict
      if (target.dataset.flip !== undefined) {
        flipAnswerInConflict(parseInt(target.dataset.flip, 10));
        return;
      }

      // Dismiss conflict ("Continue" button)
      if (target.id === "qz-dismiss") {
        var ta = document.getElementById("qz-disagree-text");
        var form = document.getElementById("qz-disagree-form");
        if (ta && ta.value.trim().length > 0 && form) {
          // User typed something but didn't send it - pulse the form, then dismiss
          form.classList.add("qz-disagree-form--highlight");
          setTimeout(function () {
            var f = document.getElementById("qz-disagree-form");
            if (f) f.classList.remove("qz-disagree-form--highlight");
            dismissConflict();
          }, 800);
        } else {
          dismissConflict();
        }
        return;
      }

      // Contact tab: switch to email
      if (target.id === "qz-tab-email") {
        var emailIn = document.getElementById("qz-contact-email");
        var altIn = document.getElementById("qz-contact-alt");
        var tabEmail = document.getElementById("qz-tab-email");
        var tabOther = document.getElementById("qz-tab-other");
        if (altIn) altIn.hidden = true;
        if (emailIn) { emailIn.hidden = false; emailIn.focus(); }
        if (tabEmail) { tabEmail.classList.add("qz-contact-tab--active"); tabEmail.setAttribute("aria-pressed", "true"); }
        if (tabOther) { tabOther.classList.remove("qz-contact-tab--active"); tabOther.setAttribute("aria-pressed", "false"); }
        return;
      }

      // Contact tab: switch to other
      if (target.id === "qz-tab-other") {
        var emailIn2 = document.getElementById("qz-contact-email");
        var altIn2 = document.getElementById("qz-contact-alt");
        var tabEmail2 = document.getElementById("qz-tab-email");
        var tabOther2 = document.getElementById("qz-tab-other");
        if (emailIn2) emailIn2.hidden = true;
        if (altIn2) { altIn2.hidden = false; altIn2.focus(); }
        if (tabEmail2) { tabEmail2.classList.remove("qz-contact-tab--active"); tabEmail2.setAttribute("aria-pressed", "false"); }
        if (tabOther2) { tabOther2.classList.add("qz-contact-tab--active"); tabOther2.setAttribute("aria-pressed", "true"); }
        return;
      }

      // Send note and continue
      if (target.id === "qz-submit-note") {
        var ta3 = document.getElementById("qz-disagree-text");
        var altIn3 = document.getElementById("qz-contact-alt");
        var emailIn3 = document.getElementById("qz-contact-email");
        var contactEl = (altIn3 && !altIn3.hidden) ? altIn3 : emailIn3;
        saveDisagreement(
          ta3 ? ta3.value.trim() : "",
          contactEl ? contactEl.value.trim() : ""
        );
        return;
      }

      // Early result
      if (target.id === "qz-see-results") {
        renderResult();
        return;
      }

      // Restart
      if (target.id === "qz-restart") {
        state.answers = {};
        state.tags = [];
        state.qIdx = 0;
        state.phase = "quiz";
        state.conflictQueue = [];
        state.activeConflict = null;
        state.dismissed = [];
        state.resolved = [];
        state.disagreements = [];
        renderQuestion(0);
        return;
      }
    });
  }

  // =========================================================================
  // INIT
  // =========================================================================

  document.addEventListener("DOMContentLoaded", function () {
    var stage = getStage();
    if (!stage) return;
    setupKeyboard(stage);
    attachEvents(stage);
    renderQuestion(0);
  });

})();
