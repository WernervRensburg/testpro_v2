import type { VercelRequest, VercelResponse } from "@vercel/node";

const TO_EMAIL = "info@testpro.co.za";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Testpro Laboratory <onboarding@resend.dev>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, number, subject, query } = req.body ?? {};

  if (!name || !email || !query) {
    return res.status(400).json({ error: "Name, email, and query are required." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return res.status(500).json({ error: "Email service is not configured." });
  }

  const html = `
    <h2>New quote request from testpro.co.za</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Contact number:</strong> ${escapeHtml(number || "Not provided")}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject || "Not provided")}</p>
    <p><strong>Query:</strong></p>
    <p>${escapeHtml(query).replace(/\n/g, "<br />")}</p>
  `;

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      reply_to: email,
      subject: subject ? `Quote request: ${subject}` : "New quote request",
      html,
    }),
  });

  if (!resendRes.ok) {
    const errorBody = await resendRes.text();
    console.error("Resend API error:", errorBody);
    return res.status(502).json({ error: "Failed to send email." });
  }

  return res.status(200).json({ ok: true });
}
