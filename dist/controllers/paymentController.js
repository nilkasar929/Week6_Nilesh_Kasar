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
exports.getOrderById = exports.createOrder = void 0;
const paymentService_1 = __importDefault(require("../services/paymentService"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, bookId, amount } = req.body;
        const order = yield paymentService_1.default.createOrder(userId, bookId, amount);
        res.status(201).json(order);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.createOrder = createOrder;
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield paymentService_1.default.getOrderById(req.params.id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(200).json(order);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getOrderById = getOrderById;
//# sourceMappingURL=paymentController.js.map