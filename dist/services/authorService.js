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
const author_1 = __importDefault(require("../models/author"));
const book_1 = __importDefault(require("../models/book"));
const getAuthors = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield author_1.default.findAll({ include: [book_1.default] });
});
const getAuthorById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield author_1.default.findByPk(id, { include: [book_1.default] });
});
const createAuthor = (authorData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield author_1.default.create(authorData);
});
const updateAuthor = (id, authorData) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield author_1.default.findByPk(id);
    if (!author)
        return null;
    yield author.update(authorData);
    return author;
});
const deleteAuthor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield author_1.default.findByPk(id);
    if (!author)
        return null;
    yield author.destroy();
    return author;
});
exports.default = {
    getAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor
};
//# sourceMappingURL=authorService.js.map