"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customerControllers_1 = require("../controllers/customerControllers");
const router = express_1.default.Router();
router.post('/customers', customerControllers_1.createCustomer);
exports.default = router;
//# sourceMappingURL=customerRoutes.js.map