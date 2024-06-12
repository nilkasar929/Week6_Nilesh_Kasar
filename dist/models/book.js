"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
const author_1 = __importDefault(require("./author"));
class Book extends sequelize_1.Model {
}
Book.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4,
        primaryKey: true,
    },
    bookCode: {
        type: sequelize_1.DataTypes.STRING
    },
    title: {
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.TEXT
    },
    publishedYear: {
        type: sequelize_1.DataTypes.INTEGER
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    externalId: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'Book',
});
// Associations
Book.belongsToMany(author_1.default, { through: 'BookAuthors' });
exports.default = Book;
//# sourceMappingURL=book.js.map