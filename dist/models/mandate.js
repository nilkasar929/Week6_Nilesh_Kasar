"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
const user_1 = __importDefault(require("./user"));
class Mandate extends sequelize_1.Model {
}
Mandate.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: user_1.default,
            key: 'id',
        },
        allowNull: false,
    },
    gocardlessMandateId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'Mandate',
});
exports.default = Mandate;
//# sourceMappingURL=mandate.js.map