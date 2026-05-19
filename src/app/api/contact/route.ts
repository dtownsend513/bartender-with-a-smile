import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      eventType,
      message,
    } = body;

    const data = await resend.emails.send({
      from: "website@bartenderwithasmile.com",
      to: "tamarsh203@yahoo.com",
      subject: `New Bartending Inquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Bartending Event Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Event Type:</strong> ${eventType || "Not provided"}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Email failed to send" },
      { status: 500 }
    );
  }
}