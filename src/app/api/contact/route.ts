import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    console.log('📧 API Contact - Début de la requête');
    
    const { name, email, subject, message, collaboration } = await request.json();
    console.log('📧 Données reçues:', { name, email, subject, collaboration });

    // Validation des données
    if (!name || !email || !message) {
      console.log('❌ Validation échouée: champs manquants');
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Validation échouée: email invalide');
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    console.log('✅ Validation réussie, configuration de Resend...');

    // Configuration de Resend
    console.log('📧 Configuration Resend...');
    console.log('📧 RESEND_API_KEY:', process.env.RESEND_API_KEY ? '✅ Configuré' : '❌ Manquant');
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    console.log('✅ Resend initialisé');

    // Configuration de l'email
    console.log('📧 Envoi de l\'email...');
    const result = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Utilisez votre domaine vérifié
      to: [process.env.RESEND_TO_EMAIL || 'k.jeyakishan@gmail.com'],
      replyTo: email,
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
    });
    
    console.log('✅ Email envoyé avec succès:', result.data?.id);

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
