import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 'fake_key_for_build');


export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    const { data, error } = await resend.emails.send({
      //from: 'iamnaman555@gmail.com',
      from: 'Acme <onboarding@resend.dev>',
      to: [`${process.env.EMAIL}`],
      subject: "support",
      react: EmailTemplate({ email: email, name: name, message: message }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend API error:", error);
      return Response.json({ error: "Failed to send email. Please try again later." }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    console.error("Unexpected error in send route:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}