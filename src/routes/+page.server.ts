import type { Actions } from './$types';

export const actions = {
    waitlist: addEmail
} satisfies Actions

async function addEmail({ request }: any) {
  try {
    console.log("Adding email")
    const data = await request.formData();
    const email = data.get("email")

    console.log("Email: ", email)
    
    // Basic validation
    if (!email || !email.includes('@') || email.length > 100) {
      console.error("No email")
      return {
        status: "error",
        message: "Email is too long, or is incorrectly formatted."
      };
    }
    
    return {
      status: 'success',
      message: 'Email validation passed!'
    };
    
  } catch (err: any) {
    console.error('Waitlist error:', err);
    return {
      status: "error",
      message: "Something went wrong"
    };
  }
}