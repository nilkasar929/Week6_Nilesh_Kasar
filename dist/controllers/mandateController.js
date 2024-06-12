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
exports.createMandate = void 0;
const gocardless_1 = __importDefault(require("../common/gocardless"));
const createMandate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { customer_id, account_number, branch_code } = req.body;
        const mandate = yield gocardless_1.default.mandates.create({
            params: {
                scheme: 'bacs',
                links: {
                    customer: customer_id,
                },
                bank_account: {
                    account_number,
                    branch_code,
                },
            },
        });
        res.status(201).json(mandate);
    }
    catch (error) {
        res.status(500).json({ "message": error });
    }
});
exports.createMandate = createMandate;
//# sourceMappingURL=mandateController.js.map