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
exports.deleteReview = exports.addReview = exports.getReviews = void 0;
const reviewService_1 = __importDefault(require("../services/reviewService"));
const getReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield reviewService_1.default.getReviews(req.params.bookId);
        res.json(reviews);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getReviews = getReviews;
const addReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield reviewService_1.default.addReview(req.user.id, req.params.bookId, req.body);
        res.status(200).json(review);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.addReview = addReview;
const deleteReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield reviewService_1.default.deleteReview(req.user, req.params.id);
        if (!result)
            return res.status(404).json({ error: 'Review not found or unauthorized' });
        res.json({ message: 'Review deleted' });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteReview = deleteReview;
//# sourceMappingURL=reviewController.js.map