import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);


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
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}