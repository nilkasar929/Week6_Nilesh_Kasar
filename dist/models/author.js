"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
class Author extends sequelize_1.Model {
}
Author.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    birthdate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    isSystemUser: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'Author',
    tableName: 'Author'
});
// Associations
// Author.belongsTo(Book, { foreignKey: 'authorId', as: 'books' });
exports.default = Author;
//# sourceMappingURL=author.js.map