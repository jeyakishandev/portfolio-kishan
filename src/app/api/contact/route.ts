import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, collaboration } = await request.json();

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // Configuration du transporteur Gmail
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Votre email Gmail
        pass: process.env.GMAIL_APP_PASSWORD, // Mot de passe d'application
      },
    });

    // Configuration de l'email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Vous recevrez l'email
      replyTo: email, // L'expéditeur pourra répondre directement
      subject: `Portfolio Contact: ${subject || 'Nouveau message'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4ade80; padding-bottom: 10px;">
            Nouveau message depuis votre portfolio
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Informations du contact</h3>
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${collaboration ? `<p><strong>Type de collaboration:</strong> ${collaboration}</p>` : ''}
            ${subject ? `<p><strong>Sujet:</strong> ${subject}</p>` : ''}
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #555; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>💡 Astuce:</strong> Vous pouvez répondre directement à cet email pour contacter ${name}.
            </p>
          </div>
        </div>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}
