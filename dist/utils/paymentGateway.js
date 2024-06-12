"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPayment = void 0;
const constants = require('gocardless-nodejs/constants');
const gocardless = require('gocardless-nodejs');
const client = gocardless(process.env.GOCARDLESS_ACCESS_TOKEN, constants.Environments.Sandbox);
const createPayment = (userId, bookId, amount) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Create a customer first (this should be done once per user)
        const customer = yield client.customers.create({
            params: {
                given_name: 'User First Name', // Replace with actual user first name
                family_name: 'User Last Name', // Replace with actual user last name
                email: 'user@example.com', // Replace with actual user email
                // Additional fields as required
            },
        });
        // Create a mandate (this should be done once per user per payment method)
        const mandate = yield client.mandates.create({
            params: {
                scheme: 'bacs', // or another scheme available in your country
                links: {
                    customer_bank_account: 'bank_account_id', // Replace with actual bank account ID
                },
            },
        });
        // Create a payment
        const payment = yield client.payments.create({
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
    }
    catch (error) {
        console.error('Error processing payment:', error);
        return {
            success: false,
            message: 'Payment failed',
        };
    }
});
exports.createPayment = createPayment;
//# sourceMappingURL=paymentGateway.js.map