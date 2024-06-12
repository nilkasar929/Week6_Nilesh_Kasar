const GoCardless = require("gocardless-nodejs");

const gocardless = GoCardless({
  access_token: process.env.GOCARDLESS_ACCESS_TOKEN || '',
  environment: 'sandbox', 
});

export default gocardless;
