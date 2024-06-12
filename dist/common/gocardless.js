"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GoCardless = require("gocardless-nodejs");
const gocardless = GoCardless({
    access_token: process.env.GOCARDLESS_ACCESS_TOKEN || '',
    environment: 'sandbox',
});
exports.default = gocardless;
//# sourceMappingURL=gocardless.js.map