import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const user = process.env.MAIL_USER;
const pass = process.env.MAIL_PASSWORD;
const from_user = process.env.MAIL_FROM;
const to_user = process.env.MAIL_TO;

export async function POST(request: Request) {
  try {
    const { name, phone, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: from_user,
      to: to_user,
      subject: 'Нова заявка з сайту Adrenaline Tour',
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    };

    console.log(mailOptions);

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 },
    );
  } catch (error) {
    return new NextResponse('Failed to send message.', { status: 500 });
  }
}
