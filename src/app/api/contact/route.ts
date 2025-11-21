import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_G9FhADgW_Jo61SQQAK1FFz88fBVV9KQNd');

export async function POST(request: NextRequest) {
  try {
    console.log('📧 API Contact - Début de la requête');
    
    const { name, email, subject, message } = await request.json();
    console.log('📧 Données reçues:', { name, email, subject });

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    console.log('📧 Tentative d\'envoi avec Resend...');
    
    // Structure simplifiée comme dans la doc officielle
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['k.jeyakishan@gmail.com'], // Votre email
      subject: `Portfolio Contact: ${subject || 'Nouveau message'}`,
      html: `
        <h2>Nouveau message depuis votre portfolio</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('❌ Erreur Resend:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    console.log('✅ Email envoyé avec succès:', data);
    return NextResponse.json(data);

  } catch (error) {
    console.error('❌ Erreur générale:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
