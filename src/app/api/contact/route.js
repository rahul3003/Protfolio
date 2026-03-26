import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        // Use environment variables or fallback to provide a setup guide
        const user = process.env.EMAIL_USER || 'enquiry@epsilon-engg.com';
        const pass = process.env.EMAIL_PASS || 'qpxw tstz uatd kctt'; // This was mentioned in previous sessions

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user, pass },
        });

        // Email to the user (Rahul)
        const mailOptions = {
            from: user,
            to: 'rahulkhandke71@gmail.com',
            subject: `New Project Inquiry: ${subject}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
                    <h2 style="color: #8b5cf6;">New Project Inquiry! 🚀</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                    <p><strong>Message:</strong></p>
                    <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
                </div>
            `,
        };

        // Automated Response to the Client
        const autoResponse = {
            from: user,
            to: email,
            subject: `Thank you for reaching out, ${name}!`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
                    <h2 style="color: #8b5cf6;">Hi ${name},</h2>
                    <p>Thank you for reaching out! I've received your inquiry regarding "<strong>${subject}</strong>".</p>
                    <p>I will review your message and get back to you as soon as possible.</p>
                    <p>Best regards,<br><strong>Rahul Khandke</strong></p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        await transporter.sendMail(autoResponse);

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Email API Error:', error);
        return NextResponse.json({ message: 'Error', error: error.message }, { status: 500 });
    }
}
