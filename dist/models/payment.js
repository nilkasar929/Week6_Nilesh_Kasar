"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
const book_1 = __importDefault(require("./book"));
const user_1 = __importDefault(require("./user"));
class Payment extends sequelize_1.Model {
}
Payment.init({
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
    amount: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'Payment',
    timestamps: true
});
// Associations
// Payment.belongsTo(Book);
// Payment.belongsTo(User);
// Book.hasMany(Payment);
// User.hasMany(Payment);
exports.default = Payment;
//# sourceMappingURL=payment.js.map