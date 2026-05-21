import { Resend } from "resend";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY environment variable." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { name, email, phone, eventDate, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Bartender With A Smile <contact@townsendsq.com>",
      to: "bartenderwithasmile@myyahoo.com",
      subject: `New Bartending Inquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Bartender With A Smile Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Event Date:</strong> ${eventDate || "Not provided"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { error: "Email failed to send." },
      { status: 500 }
    );
  }
}