import type { Actions } from './$types';
import { env } from '$env/dynamic/private';
import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

// Simple in-memory rate limiting
const submissions = new Map();

export const actions = {
    waitlist: addEmail
} satisfies Actions

async function sendConfirmation(email: string) {
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

async function addToGoogleSheets(email: string) {
  // Check if we have all required environment variables
  if (!env.GOOGLE_SHEET_CLIENT_EMAIL || !env.GOOGLE_SHEET_PRIVATE_KEY || !env.GOOGLE_SPREADSHEET_ID) {
    throw new Error('Missing Google Sheets environment variables');
  }

  console.log('Creating Google Sheets connection...');
  
  // Create JWT inside function (not at module level)
  const serviceAccountAuth = new JWT({
    email: env.GOOGLE_SHEET_CLIENT_EMAIL,
    key: env.GOOGLE_SHEET_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  // Connect to Google Spreadsheet
  const doc = new GoogleSpreadsheet(env.GOOGLE_SPREADSHEET_ID, serviceAccountAuth);
  await doc.loadInfo();
  console.log(`Loaded spreadsheet: ${doc.title}`);
  
  const sheet = doc.sheetsByIndex[0];
  await sheet.addRow({
    'timestamp': new Date().toISOString(),
    'email': email,
  });
  
  console.log('Successfully added email to Google Sheets');
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

    // Add to Google Sheets first - this must succeed
    await addToGoogleSheets(email);
    console.log('Email successfully added to Google Sheets');

    // Only send confirmation email if Google Sheets succeeded
    await sendConfirmation(email);
    console.log('Confirmation email sent');
    
    // Update rate limiting only after everything succeeds
    submissions.set(emailKey, now);
    
    return {
      status: 'success',
      message: 'Email added to waitlist!'
    };
    
  } catch (err: any) {
    console.error('Waitlist error:', err);
    
    // Return specific error messages based on what failed
    if (err.message.includes('Google Sheets')) {
      return {
        status: "error",
        message: "Failed to save email. Please try again later."
      };
    } else if (err.message.includes('email')) {
      return {
        status: "error",
        message: "Failed to send confirmation email. Please try again later."
      };
    } else {
      return {
        status: "error",
        message: "Something went wrong. Please try again later."
      };
    }
  }
}