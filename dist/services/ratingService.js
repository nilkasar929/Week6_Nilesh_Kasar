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
const rating_1 = __importDefault(require("../models/rating"));
const user_1 = __importDefault(require("../models/user"));
const book_1 = __importDefault(require("../models/book"));
const getRatings = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield rating_1.default.findAll({ where: { bookId }, include: [user_1.default, book_1.default] });
});
const addRating = (userId, bookId, ratingData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield rating_1.default.create(Object.assign(Object.assign({}, ratingData), { userId, bookId }));
});
exports.default = {
    getRatings,
    addRating
};
//# sourceMappingURL=ratingService.js.map