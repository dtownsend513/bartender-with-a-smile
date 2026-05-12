import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "website@thekomposition.com",
      to: "kompbeauty@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Website Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

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