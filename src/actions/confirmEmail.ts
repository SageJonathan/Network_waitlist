"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendWaitlistEmail({
  email,
  name,
}: {
  email: string;
  name?: string;
}) {
  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Humanae! 🎉</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #FCF9ED; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.06);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #F89B37, #F4529B); padding: 40px 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
            Welcome to Humanae! 🎉
          </h1>
        </div>

        <!-- Content -->
        <div style="padding: 40px 30px;">
          <h2 style="color: #1a1a1a; margin: 0 0 20px 0; font-size: 24px; font-weight: 600;">
            ${name ? `Hey ${name},` : "Hey,"} you're in—and we're genuinely stoked.
          </h2>
          
          <p style="color: #404040; margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
            Seriously, this is the kind of thing that makes building this worth it. You showed up. You're here. That matters.
          </p>

          <p style="color: #404040; margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
            We're building this around the people on this list—what you're into, how you like to connect, what would actually make a difference for you.
            </p>
            <p style="color: #404040; margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">So if you've got a minute, I'd love for you to fill out a short survey. Your answers go straight into what we build next. You're in the room.</p>
          

          <div style="text-align: center; margin: 32px 0;">
            <a href="https://humanae.co/survey" style="display: inline-block; background: linear-gradient(135deg, #F89B37, #F4529B); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 9999px; font-weight: 600; font-size: 16px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
              Fill out the survey
            </a>
          </div>

          <p style="color: #404040; margin: 24px 0 0 0; font-size: 16px; line-height: 1.6; text-align: center;">
            Can't wait to see you when we're live. <br /> Until then—thanks for being part of this.
          </p>
        </div>

        <!-- Footer -->
        <div style="background-color: #FCF9ED; padding: 24px; text-align: center; border-top: 1px solid #e5e5e5;">
          <p style="color: #737373; margin: 0; font-size: 12px;">
            Questions? Just reply to this.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  const { data, error } = await resend.emails.send({
    from: "Humanae <hello@humanae.co>",
    to: email,
    subject: "You're in",
    html: emailHtml,
  });

  if (error) {
    console.error("Failed to send waitlist email:", error);
  }

  return { data, error };
}
