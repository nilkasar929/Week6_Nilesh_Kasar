"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
const book_1 = __importDefault(require("./book"));
const user_1 = __importDefault(require("./user"));
class Rating extends sequelize_1.Model {
}
Rating.init({
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
    rating: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: pgConfig_1.default,
    modelName: 'Rating',
});
// // Associations
// Rating.belongsTo(User, { foreignKey: 'userId' });
// Rating.belongsTo(Book, { foreignKey: 'bookId' });
// Book.hasMany(Rating);
// User.hasMany(Rating);
exports.default = Rating;
//# sourceMappingURL=rating.js.map