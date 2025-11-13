import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const BRAND = "#253c80";

// map your select values to human labels
const INDUSTRY_LABELS: Record<string, string> = {
  medspa: "Med Spa",
  dental: "Dental / Ortho",
  physio: "Physiotherapy / Pilates",
  realestate: "Real Estate",
  clinic: "Clinic / Aesthetic",
  home: "Home Services",
  restaurants: "Restaurants",
  other: "Other",
};

const VOLUME_LABELS: Record<string, string> = {
  "0-100": "0–100 calls / month",
  "100-300": "100–300 calls / month",
  "300-500": "300–500 calls / month",
  "500+": "500+ calls / month",
};

// configure your SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST!,      // e.g. "smtp.sendgrid.net"
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,                     // true for port 465
  auth: {
    user: process.env.SMTP_USER!,    // SMTP username
    pass: process.env.SMTP_PASS!,    // SMTP password / API key
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name = "",
      email = "",
      business = "",
      industry = "",
      callVolume = "",
      message = "",
    } = body ?? {};

    if (!name || !email || !business) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    const industryLabel = INDUSTRY_LABELS[industry] || industry || "—";
    const volumeLabel = VOLUME_LABELS[callVolume] || callVolume || "—";

    const subject = `New Keel lead – ${business} (${name})`;

    // Plain-text version (for reliability / mobile preview)
    const text = [
      "New lead from Keel website",
      "----------------------------------",
      `Name: ${name}`,
      `Email: ${email}`,
      `Business: ${business}`,
      `Industry: ${industryLabel}`,
      `Monthly call volume: ${volumeLabel}`,
      "",
      "Message:",
      message || "—",
      "",
      "Sent from https://saykeel.com/",
    ].join("\n");

    // HTML version (nice layout in Gmail)
    const html = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#0f172a">
        <h2 style="margin:0 0 8px;font-size:20px;color:${BRAND}">New Keel lead</h2>
        <p style="margin:0 0 16px;color:#475569">
          Someone just filled out the contact form on your website.
        </p>

        <table style="border-collapse:collapse;margin:0 0 16px;font-size:14px">
          <tbody>
            <tr>
              <td style="padding:4px 8px;color:#64748b;">Name</td>
              <td style="padding:4px 8px;font-weight:500;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:4px 8px;color:#64748b;">Email</td>
              <td style="padding:4px 8px;">
                <a href="mailto:${encodeURIComponent(email)}" style="color:${BRAND};text-decoration:none;">
                  ${escapeHtml(email)}
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding:4px 8px;color:#64748b;">Business</td>
              <td style="padding:4px 8px;">${escapeHtml(business)}</td>
            </tr>
            <tr>
              <td style="padding:4px 8px;color:#64748b;">Industry</td>
              <td style="padding:4px 8px;">${escapeHtml(industryLabel)}</td>
            </tr>
            <tr>
              <td style="padding:4px 8px;color:#64748b;">Monthly call volume</td>
              <td style="padding:4px 8px;">${escapeHtml(volumeLabel)}</td>
            </tr>
          </tbody>
        </table>

        <h3 style="margin:0 0 6px;font-size:16px;">Message</h3>
        <div style="
          margin:0 0 16px;
          padding:12px 14px;
          border-radius:10px;
          border:1px solid #e2e8f0;
          background:#f8fafc;
          white-space:pre-wrap;
          font-size:14px;
        ">
          ${escapeHtml(message || "—")}
        </div>

        <p style="margin:0;font-size:12px;color:#94a3b8;">
          Sent from <a href="https://saykeel.com" style="color:${BRAND};text-decoration:none;">saykeel.com</a>
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Keel Website" <${process.env.SMTP_FROM || "hello@saykeel.com"}>`,
      to: "hello@saykeel.com",
      replyTo: `${name} <${email}>`, // when you hit reply, it goes to the lead
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact api error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 },
    );
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
