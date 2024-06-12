import GoCardless from 'gocardless-nodejs';


const constants = require('gocardless-nodejs/constants');
const gocardless = require('gocardless-nodejs');
const client = gocardless(process.env.GOCARDLESS_ACCESS_TOKEN, constants.Environments.Sandbox)

export const createPayment = async (userId: string, bookId: string, amount: number) => {
  try {

    
    const customer = await client.customers.create({
      params: {
        given_name: 'nilesh', 
        family_name: 'kasar', 
        email: 'nilesh@gmail.com', 
        
      }
    });

    
    const mandate = await client.mandates.create({
      params: {
        scheme: 'bacs',
        links: {
          customer_bank_account: '65677', 
        },
      },
    });

    
    const payment = await client.payments.create({
      params: {
        amount: amount * 100, 
        currency: 'GBP',
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
