const CONTACT_TO_EMAIL = 'mallardcreekworshipcenter@gmail.com';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message, isPrayerRequest } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    return res.status(500).json({ error: 'Email service is not configured' });
  }

  const text = [
    'New contact form submission from Mallard Creek Worship Center website',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone Number: ${phone || 'Not provided'}`,
    `Prayer Request: ${isPrayerRequest ? 'Yes' : 'No'}`,
    '',
    'Message:',
    message
  ].join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1b1b1b;">
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Prayer Request:</strong> ${isPrayerRequest ? 'Yes' : 'No'}</p>
      <p><strong>Message:</strong></p>
      <p>${String(message).replace(/\n/g, '<br />')}</p>
    </div>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: isPrayerRequest
          ? 'New Prayer Request from Mallard Creek Worship Center Website'
          : 'New Contact Form Message from Mallard Creek Worship Center Website',
        text,
        html
      })
    });

    if (!response.ok) {
      const errorBody = await response.text();
      return res.status(502).json({ error: errorBody || 'Failed to send email' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: 'Unexpected email error' });
  }
}
