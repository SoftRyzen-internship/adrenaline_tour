import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { configuration } from '@/utils';

export async function POST(request: Request) {
  try {
    const { name, phone, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: configuration.apiMailUser,
        pass: configuration.apiMailPass,
      },
    });

    const mailOptions = {
      from: configuration.apiMailFrom,
      to: configuration.apiMailTo,
      subject: 'Нова заявка з сайту Adrenaline Tour',
      text: `Імʼя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nКоментар: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 },
    );
  } catch (error) {
    return new NextResponse('Failed to send message.', { status: 500 });
  }
}
