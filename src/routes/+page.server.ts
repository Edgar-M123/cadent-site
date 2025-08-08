import { json, error } from '@sveltejs/kit';
import { GOOGLE_SPREADSHEET_ID, GOOGLE_SHEET_API_KEY, GOOGLE_SHEET_PRIVATE_KEY, GOOGLE_SHEET_CLIENT_EMAIL } from '$env/static/private';
import type { Actions } from './$types'
import {JWT} from 'google-auth-library'
import {GoogleSpreadsheet} from 'google-spreadsheet'

// Simple in-memory rate limiting
const submissions = new Map();

const serviceAccountAuth = new JWT({
  email: GOOGLE_SHEET_CLIENT_EMAIL,
  key: GOOGLE_SHEET_PRIVATE_KEY.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export const actions = {
    waitlist: addEmail
} satisfies Actions


async function addEmail({ request }: any) {
  try {
    console.log("Adding email")
    const data = await request.formData();
    const email = data.get("email")

    console.log("data: ", data)
    console.log("Email: ", email)
    
    // Basic validation
    if (!email || !email.includes('@') || email.length > 100) {
      console.error("No email")
      return {
        status: "error",
        message: "Email is too long, or is incorrectly formatted."
      };
    }
    
    // Rate limiting by email (5 minutes cooldown)
    const now = Date.now();
    const emailKey = email.toLowerCase();
    const lastSubmission = submissions.get(emailKey);
    
    if (lastSubmission && (now - lastSubmission) < 300000) {
      return {
        status: "error",
        message: 'Please wait 5 minutes before submitting again'
      };
    }
 
    // Google Sheets API call
    const doc = new GoogleSpreadsheet(GOOGLE_SPREADSHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    
    await sheet.addRow({
      'timestamp': new Date(),
      'email': email,
    });

    // Update rate limiting
    submissions.set(emailKey, now);
    
    return {
      status: 'success',
      message: 'Email added to waitlist!'
    };
    
  } catch (err: any) {
    console.error('Waitlist error:', err);
    
    if (err.status) {
      throw err;
    }
    
    throw error(500, 'Internal server error');
  }
}