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
exports.getCurrentUser = exports.login = exports.register = void 0;
const userService_1 = __importDefault(require("../services/userService"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userService_1.default.register(req.body);
        res.status(201).json(user);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const token = yield userService_1.default.login(username, password);
        if (!token)
            return res.status(401).json({ error: 'Invalid credentials' });
        res.json({ token });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.login = login;
const getCurrentUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userService_1.default.getCurrentUser(req.user.id);
        res.json(user);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getCurrentUser = getCurrentUser;
//# sourceMappingURL=userController.js.map