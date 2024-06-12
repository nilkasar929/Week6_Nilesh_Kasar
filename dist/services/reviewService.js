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
const review_1 = __importDefault(require("../models/review"));
const user_1 = __importDefault(require("../models/user"));
const book_1 = __importDefault(require("../models/book"));
const getReviews = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield review_1.default.findAll({ where: { bookId }, include: [user_1.default, book_1.default] });
});
const addReview = (userId, bookId, reviewData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield review_1.default.create(Object.assign(Object.assign({}, reviewData), { userId, bookId }));
});
const deleteReview = (user, reviewId) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield review_1.default.findByPk(reviewId);
    if (!review || (user.id !== review.userId && !user.isAdmin))
        return null;
    yield review.destroy();
    return review;
});
exports.default = {
    getReviews,
    addReview,
    deleteReview
};
//# sourceMappingURL=reviewService.js.map