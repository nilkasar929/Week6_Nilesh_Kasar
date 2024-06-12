"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    isAdmin: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'User',
    tableName: 'user'
});
// User.hasMany(Review, { foreignKey: 'userId', as: 'reviews' });
// User.hasMany(Rating,{ foreignKey: 'ratingId', as: 'ratings' });
// User.hasMany(Payment,{ foreignKey: 'paymentId',as:'payment'  });
exports.default = User;
//# sourceMappingURL=user.js.map