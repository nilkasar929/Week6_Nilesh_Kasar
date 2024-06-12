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
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookById = exports.getBooks = void 0;
const bookService_1 = __importDefault(require("../services/bookService"));
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield bookService_1.default.getBooks();
        res.json(books);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getBooks = getBooks;
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield bookService_1.default.getBookById(req.params.id);
        if (!book)
            return res.status(404).json({ error: 'Book not found' });
        res.json(book);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getBookById = getBookById;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield bookService_1.default.createBook(req.body);
        res.json(book);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createBook = createBook;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield bookService_1.default.updateBook(req.params.id, req.body);
        if (!book)
            return res.status(404).json({ error: 'Book not found' });
        res.json(book);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateBook = updateBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bookService_1.default.deleteBook(req.params.id);
        if (!result)
            return res.status(404).json({ error: 'Book not found' });
        res.json({ message: 'Book deleted' });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteBook = deleteBook;
//# sourceMappingURL=bookController.js.map