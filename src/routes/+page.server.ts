import type { Actions } from './$types';

export const actions: Actions = {
  signup: async ({ request }) => {
    console.log('Form submitted');
    return { success: true };
  }
};