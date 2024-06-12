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
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const register = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    userData.password = yield bcrypt_1.default.hash(userData.password, 10);
    return yield user_1.default.create(userData);
});
const login = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.findOne({ where: { username } });
    if (!user || !(yield bcrypt_1.default.compare(password, user.password)))
        return null;
    return jsonwebtoken_1.default.sign({ userId: user.id, isAdmin: user.isAdmin }, process.env.SECRET_KEY);
});
const getCurrentUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.findByPk(userId);
});
exports.default = {
    register,
    login,
    getCurrentUser
};
//# sourceMappingURL=userService.js.map