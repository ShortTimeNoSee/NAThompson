// Cloudflare Pages Function: POST /api/disagree
// Receives quiz disagreement notes and sends them to NA via Resend (resend.com).
// Env vars required (Cloudflare Pages > Settings > Environment variables > Production):
//   RESEND_API_KEY  - from resend.com dashboard after domain verification
//   NOTIFY_TO       - where to deliver, e.g. your Proton address
//   NOTIFY_FROM     - verified sending address, e.g. "quiz@nathompson.com"

export async function onRequestPost(context) {
  const { request, env } = context;

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return new Response("Bad Request", { status: 400 });
  }

  let body;
  try {
    body = await request.json();
  } catch (_) {
    return new Response("Bad Request", { status: 400 });
  }

  const text = (body.text || "").trim();
  const contact = (body.contact || "").trim();
  const conflictId = (body.conflictId || "unknown").trim();

  if (!text) {
    return new Response("Bad Request", { status: 400 });
  }

  const emailText = [
    "Quiz disagreement",
    "",
    "Conflict ID: " + conflictId,
    "Contact:     " + (contact || "(none provided)"),
    "",
    "Message:",
    text,
  ].join("\n");

  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + env.RESEND_API_KEY,
    },
    body: JSON.stringify({
      from: env.NOTIFY_FROM,
      to: [env.NOTIFY_TO],
      subject: "Quiz note: " + conflictId,
      text: emailText,
    }),
  });

  if (!resp.ok) {
    return new Response("Mail delivery failed", { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
