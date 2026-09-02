import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "RESEND_API_KEY is not configured in environment variables." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return Response.json({ error: "Invalid request payload." }, { status: 400 });
    }

    const { name, email, message } = body;
    if (!email || typeof email !== 'string' || !email.trim()) {
      return Response.json({ error: "Email is required." }, { status: 400 });
    }

    const trimmedEmail = email.trim();
    const isSubscription = !name && !message;
    const subject = isSubscription
      ? `New Newsletter Subscription: ${trimmedEmail}`
      : `Support Request from ${name || trimmedEmail}`;

    const toEmail = process.env.EMAIL || 'contact@xponentribe.com';

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [toEmail],
      subject: subject,
      react: EmailTemplate({ email: trimmedEmail, name, message }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend API error:", error);
      return Response.json(
        { error: error.message || "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return Response.json({ success: true, data });
  } catch (error: any) {
    console.error("Unexpected error in send route:", error);
    return Response.json(
      { error: error?.message || "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
