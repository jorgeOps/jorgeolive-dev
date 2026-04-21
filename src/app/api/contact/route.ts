import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, business, message } = await req.json();

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Enviar email usando Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Usarás tu dominio verificado después
      to: ['jorgeolivepalacios@gmail.com'], // ⚠️ IMPORTANTE: Reemplaza esto con tu email real
      subject: `Nuevo contacto de ${name} - ${business || 'Sin empresa'}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #d4643f 0%, #b84d2c 100%);
                color: white;
                padding: 30px 20px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-left: 4px solid #d4643f;
                border-radius: 4px;
              }
              .label {
                font-weight: 600;
                color: #d4643f;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .value {
                color: #333;
                font-size: 16px;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 4px;
                border: 1px solid #e0e0e0;
                white-space: pre-wrap;
                margin-top: 10px;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
                color: #666;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">📬 Nuevo Mensaje de Contacto</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">jorgeolive.com</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Nombre</div>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #d4643f; text-decoration: none;">${email}</a></div>
              </div>

              ${business ? `
              <div class="field">
                <div class="label">🏢 Negocio</div>
                <div class="value">${business}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="label">💬 Mensaje</div>
                <div class="message-box">${message}</div>
              </div>

              <div class="footer">
                <p>Este mensaje fue enviado desde el formulario de contacto de <strong>jorgeolive.com</strong></p>
                <p style="margin-top: 10px;">
                  <a href="mailto:${email}?subject=Re: Consulta desde jorgeolive.com"
                     style="display: inline-block; padding: 12px 24px; background: #d4643f; color: white; text-decoration: none; border-radius: 6px; font-weight: 600;">
                    Responder a ${name}
                  </a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
      // También incluir versión plain text como fallback
      text: `
Nuevo mensaje de contacto desde jorgeolive.com

Nombre: ${name}
Email: ${email}
${business ? `Negocio: ${business}` : ''}

Mensaje:
${message}

---
Responder a: ${email}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
