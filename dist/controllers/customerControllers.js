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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomer = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
const goCardlessClient = axios_1.default.create({
    baseURL: 'https://api-sandbox.gocardless.com/',
    headers: {
        Authorization: `Bearer ${process.env.GOCARDLESS_ACCESS_TOKEN}`,
        'GoCardless-Version': '2015-07-06',
        'Content-Type': 'application/json',
    },
});
const createCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customerData = req.body;
        const response = yield goCardlessClient.post('/customers', { customers: customerData });
        res.status(201).json(response.data.customers);
    }
    catch (error) {
        console.error('Error creating customer:', error);
        if (error.response && error.response.data) {
            const { code, message, errors } = error.response.data;
            return res.status(500).json({ code, message, errors });
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.createCustomer = createCustomer;
//# sourceMappingURL=customerControllers.js.map