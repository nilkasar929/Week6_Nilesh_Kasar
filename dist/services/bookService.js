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
const book_1 = __importDefault(require("../models/book"));
const author_1 = __importDefault(require("../models/author"));
const review_1 = __importDefault(require("../models/review"));
const rating_1 = __importDefault(require("../models/rating"));
const getBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield book_1.default.findAll({ include: [author_1.default, review_1.default, rating_1.default] });
});
const getBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield book_1.default.findByPk(id, { include: [author_1.default, review_1.default, rating_1.default] });
});
const createBook = (bookData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield book_1.default.create(bookData);
});
const updateBook = (id, bookData) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_1.default.findByPk(id);
    if (!book)
        return null;
    yield book.update(bookData);
    return book;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_1.default.findByPk(id);
    if (!book)
        return null;
    yield book.destroy();
    return book;
});
exports.default = {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};
//# sourceMappingURL=bookService.js.map