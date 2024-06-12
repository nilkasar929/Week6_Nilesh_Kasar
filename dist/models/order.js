"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const sequelize_1 = require("sequelize");
const user_1 = __importDefault(require("./user"));
const book_1 = __importDefault(require("./book"));
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
class Order extends sequelize_1.Model {
}
exports.Order = Order;
Order.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    amount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'Order',
    timestamps: true
});
Order.belongsTo(user_1.default, { foreignKey: 'userId' });
Order.belongsTo(book_1.default, { foreignKey: 'bookId' });
//# sourceMappingURL=order.js.map