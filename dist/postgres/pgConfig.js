"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const common_1 = __importDefault(require("../common/common"));
const sequelize = new sequelize_1.Sequelize({
    username: common_1.default.postgres.USERNAME,
    password: common_1.default.postgres.PASSWORD,
    host: common_1.default.postgres.HOST,
    database: common_1.default.postgres.DATABASE,
    dialect: common_1.default.postgres.DIALECT,
    port: common_1.default.postgres.PORT
});
sequelize.authenticate()
    .then(() => {
    console.log("Database Connected");
}).catch(() => {
    console.log("Error connecting to the database");
});
sequelize.sync().then(() => {
    console.log("Database is synchronized");
}).catch(() => {
    console.log("Error synchronizing the database");
});
exports.default = sequelize;
//# sourceMappingURL=pgConfig.js.map