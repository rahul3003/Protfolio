import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function escapeHtml(text = '') {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
            return NextResponse.json(
                { message: 'All fields are required.' },
                { status: 400 }
            );
        }

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { message: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        const user = process.env.EMAIL_USER;
        const pass = process.env.EMAIL_PASS;
        const recipient = process.env.EMAIL_TO || 'rahulkhandke71@gmail.com';

        if (!user || !pass) {
            console.error('SMTP credentials missing. Set EMAIL_USER and EMAIL_PASS in .env.local');
            return NextResponse.json(
                { message: 'Email service is not configured. Please try again later.' },
                { status: 503 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: { user, pass },
        });

        await transporter.verify();

        const safeName = escapeHtml(name.trim());
        const safeEmail = escapeHtml(email.trim());
        const safeSubject = escapeHtml(subject.trim());
        const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br>');

        const mailOptions = {
            from: `"Portfolio Contact" <${user}>`,
            to: recipient,
            replyTo: email.trim(),
            subject: `New Project Inquiry: ${subject.trim()}`,
            html: `
                <div style="font-family: 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; color: #1a1a1a; line-height: 1.6;">
                    <div style="background: linear-gradient(135deg, #8b5cf6, #ec4899); padding: 24px; border-radius: 16px 16px 0 0;">
                        <h2 style="color: #fff; margin: 0; font-size: 22px;">New Project Inquiry</h2>
                    </div>
                    <div style="background: #fafafa; padding: 28px; border: 1px solid #eee; border-top: none; border-radius: 0 0 16px 16px;">
                        <p style="margin: 0 0 8px;"><strong>Name:</strong> ${safeName}</p>
                        <p style="margin: 0 0 8px;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
                        <p style="margin: 0 0 20px;"><strong>Subject:</strong> ${safeSubject}</p>
                        <div style="background: #fff; padding: 20px; border-radius: 12px; border-left: 4px solid #8b5cf6;">
                            <p style="margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Message</p>
                            <p style="margin: 0;">${safeMessage}</p>
                        </div>
                    </div>
                </div>
            `,
        };

        const autoResponse = {
            from: `"Rahul Khandke" <${user}>`,
            to: email.trim(),
            subject: `Thanks for reaching out, ${name.trim()}!`,
            html: `
                <div style="font-family: 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; color: #1a1a1a; line-height: 1.6;">
                    <h2 style="color: #8b5cf6; margin-top: 0;">Hi ${safeName},</h2>
                    <p>Thank you for reaching out! I've received your inquiry about <strong>"${safeSubject}"</strong>.</p>
                    <p>I'll review your message and get back to you within 24 hours.</p>
                    <p style="margin-bottom: 0;">Best regards,<br><strong>Rahul Khandke</strong></p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        await transporter.sendMail(autoResponse);

        return NextResponse.json(
            { message: 'Message delivered successfully.', deliveredAt: new Date().toISOString() },
            { status: 200 }
        );
    } catch (error) {
        console.error('SMTP Error:', error);
        const isAuthError = error.code === 'EAUTH' || error.responseCode === 535;
        return NextResponse.json(
            {
                message: isAuthError
                    ? 'Email authentication failed. Check SMTP credentials.'
                    : 'Failed to send message. Please try again.',
            },
            { status: 500 }
        );
    }
}
