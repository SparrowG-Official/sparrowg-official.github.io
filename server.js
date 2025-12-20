import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { Resend } from 'resend';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.json());
app.use(express.static(join(__dirname, 'dist')));

// API endpoint for contact form
app.post('/api/contact', async (req, res) => {
  try {
    const formData = req.body;

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message || !formData.userType) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Map user type to readable format
    const userTypeMap = {
      parent: 'Parent',
      school: 'School / Teacher',
      corporate: 'Corporate',
    };

    // Send email using Resend
    // For testing: Use onboarding@resend.dev (Resend's test domain)
    // For production: Use your verified domain (e.g., support@sparrowg.com)
    // NOTE: Test emails can only be sent to the email address registered with Resend
    const toEmail = process.env.NODE_ENV === 'production' ? 'support@sparrowg.com' : 'palasamudramsharma@gmail.com';

    const { data, error } = await resend.emails.send({
      from: 'SparrowG Contact Form <onboarding@resend.dev>',
      to: [toEmail],
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #0f766e;
                color: white;
                padding: 20px;
                border-radius: 5px 5px 0 0;
              }
              .content {
                background-color: #f9fafb;
                padding: 20px;
                border: 1px solid #e5e7eb;
                border-top: none;
                border-radius: 0 0 5px 5px;
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: bold;
                color: #0f766e;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                padding: 10px;
                background-color: white;
                border-left: 3px solid #0f766e;
                border-radius: 3px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Contact Form Submission</h2>
              </div>
              ${process.env.NODE_ENV !== 'production' ? `
              <div style="background-color: #fef3c7; border: 2px solid #f59e0b; padding: 15px; margin: 15px 0; border-radius: 5px;">
                <strong>⚠️ TEST MODE:</strong> In production, this email will be sent to <strong>support@sparrowg.com</strong>
              </div>
              ` : ''}
              <div class="content">
                <div class="field">
                  <span class="label">User Type:</span>
                  <div class="value">${userTypeMap[formData.userType]}</div>
                </div>

                <div class="field">
                  <span class="label">Name:</span>
                  <div class="value">${formData.fullName}</div>
                </div>

                <div class="field">
                  <span class="label">Email:</span>
                  <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
                </div>

                ${formData.phone ? `
                <div class="field">
                  <span class="label">Phone:</span>
                  <div class="value"><a href="tel:${formData.phone}">${formData.phone}</a></div>
                </div>
                ` : ''}

                <div class="field">
                  <span class="label">Subject:</span>
                  <div class="value">${formData.subject}</div>
                </div>

                <div class="field">
                  <span class="label">Message:</span>
                  <div class="value">${formData.message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

User Type: ${userTypeMap[formData.userType]}
Name: ${formData.fullName}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ''}
Subject: ${formData.subject}

Message:
${formData.message}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      messageId: data?.id
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
