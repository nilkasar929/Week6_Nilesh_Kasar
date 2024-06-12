import GoCardless from 'gocardless-nodejs';


const constants = require('gocardless-nodejs/constants');
const gocardless = require('gocardless-nodejs');
const client = gocardless(process.env.GOCARDLESS_ACCESS_TOKEN, constants.Environments.Sandbox)

export const createPayment = async (userId: string, bookId: string, amount: number) => {
  try {
    // Create a customer first (this should be done once per user)
    const customer = await client.customers.create({
      params: {
        given_name: 'User First Name', // Replace with actual user first name
        family_name: 'User Last Name', // Replace with actual user last name
        email: 'user@example.com', // Replace with actual user email
        // Additional fields as required
      },
    });

    // Create a mandate (this should be done once per user per payment method)
    const mandate = await client.mandates.create({
      params: {
        scheme: 'bacs', // or another scheme available in your country
        links: {
          customer_bank_account: 'bank_account_id', // Replace with actual bank account ID
        },
      },
    });

    // Create a payment
    const payment = await client.payments.create({
      params: {
        amount: amount * 100, // GoCardless API requires amount in pence/cents
        currency: 'GBP', // Replace with actual currency
        links: {
          mandate: mandate.id,
        },
        description: `Payment for book ${bookId}`,
      },
    });

    return {
      success: true,
      paymentId: payment.id,
      message: 'Payment processed successfully',
    };
  } catch (error) {
    console.error('Error processing payment:', error);
    return {
      success: false,
      message: 'Payment failed',
    };
  }
};
