import type { Actions } from './$types';
import { env } from '$env/dynamic/private';

// Simple in-memory rate limiting
const submissions = new Map();

export const actions = {
    waitlist: addEmail
} satisfies Actions

async function sendConfirmation(email: string) {
  console.log('RESEND_API_KEY exists:', !!env.RESEND_API_KEY);
  
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'Cadent App <confirm@waitlist.cadentapp.com>',
      to: [email],
      subject: 'Thank you for signing up!',
      html: '<p>Welcome to Cadent waitlist!</p>'
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Email send failed:', errorText);
    throw new Error(`Failed to send email: ${response.status}`);
  }

  return await response.json();
}

async function addEmail({ request }: any) {
  try {
    const data = await request.formData();
    const email = data.get("email")
    
    if (!email || !email.includes('@') || email.length > 100) {
      return {
        status: "error",
        message: "Email is too long, or is incorrectly formatted."
      };
    }
    
    // Rate limiting
    const now = Date.now();
    const emailKey = email.toLowerCase();
    const lastSubmission = submissions.get(emailKey);
    
    if (lastSubmission && (now - lastSubmission) < 300000) {
      return {
        status: "error",
        message: 'Please wait 5 minutes before submitting again'
      };
    }

    submissions.set(emailKey, now);

    // Send email
    await sendConfirmation(email);
    
    return {
      status: 'success',
      message: 'Email added to waitlist!'
    };
    
  } catch (err: any) {
    console.error('Waitlist error:', err);
    return {
      status: "error",
      message: "Something went wrong"
    };
  }
}