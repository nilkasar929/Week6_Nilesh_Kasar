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
exports.deleteAuthor = exports.updateAuthor = exports.createAuthor = exports.getAuthorById = exports.getAuthors = void 0;
const authorService_1 = __importDefault(require("../services/authorService"));
const getAuthors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield authorService_1.default.getAuthors();
        res.json(authors);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAuthors = getAuthors;
const getAuthorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield authorService_1.default.getAuthorById(req.params.id);
        if (!author)
            return res.status(404).json({ error: 'Author not found' });
        res.json(author);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAuthorById = getAuthorById;
const createAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield authorService_1.default.createAuthor(req.body);
        res.json(author);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createAuthor = createAuthor;
const updateAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield authorService_1.default.updateAuthor(req.params.id, req.body);
        if (!author)
            return res.status(404).json({ error: 'Author not found' });
        res.json(author);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateAuthor = updateAuthor;
const deleteAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield authorService_1.default.deleteAuthor(req.params.id);
        if (!result)
            return res.status(404).json({ error: 'Author not found' });
        res.json({ message: 'Author deleted' });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteAuthor = deleteAuthor;
//# sourceMappingURL=authorController.js.map