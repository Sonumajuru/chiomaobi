import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const rows = Object.entries(body)
    .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:600;border:1px solid #ddd">${k}</td><td style="padding:6px 12px;border:1px solid #ddd">${v}</td></tr>`)
    .join('');

  const html = `<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows}</table>`;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: body._to ?? process.env.GMAIL_USER,
      cc: body._cc,
      subject: body._subject ?? 'New Form Submission – Tech Bloom',
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
