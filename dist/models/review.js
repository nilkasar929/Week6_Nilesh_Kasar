"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
const book_1 = __importDefault(require("./book"));
const user_1 = __importDefault(require("./user"));
class Review extends sequelize_1.Model {
}
Review.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: user_1.default,
            key: 'id',
        },
    },
    bookId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: book_1.default,
            key: 'id',
        },
    },
    content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'Review',
});
// Associations
book_1.default.hasMany(Review);
user_1.default.hasMany(Review);
Review.belongsTo(user_1.default, { foreignKey: 'userId' });
Review.belongsTo(book_1.default, { foreignKey: 'bookId' });
exports.default = Review;
//# sourceMappingURL=review.js.map