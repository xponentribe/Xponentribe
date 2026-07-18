import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 'fake_key_for_build');


export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return Response.json({ error: "Invalid request payload." }, { status: 400 });
    }

    const { name, email, message } = body;
    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields: name, email, or message." }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [`${process.env.EMAIL}`],
      subject: "Support Request",
      react: EmailTemplate({ email, name, message }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend API error:", error);
      return Response.json({ error: "Failed to send email. Please try again later." }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Unexpected error in send route:", error);
    return Response.json({ error: "An unexpected error occurred. Please try again later." }, { status: 500 });
  }
}