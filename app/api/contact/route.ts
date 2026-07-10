import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body as { name?: string; email?: string; message?: string };

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY ?? "";
    const toEmail = process.env.CONTACT_TO_EMAIL ?? "";
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "noreply@grandapartman.sk";

    // Graceful fallback if not configured
    if (!apiKey || !toEmail) {
      return NextResponse.json({ ok: false, unconfigured: true }, { status: 200 });
    }

    // Send via Resend
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: `Grand Apartman <${fromEmail}>`,
      to: [toEmail],
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><hr/><p>${message.replace(/\n/g, "<br/>")}</p>`,
      reply_to: email,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json({ ok: false, error: result.error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ ok: false, error: "Internal error" }, { status: 500 });
  }
}
