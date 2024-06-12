"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const autherRoutes_1 = __importDefault(require("./routes/autherRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const reviewRoutes_1 = __importDefault(require("./routes/reviewRoutes"));
const ratingRoutes_1 = __importDefault(require("./routes/ratingRoutes"));
const paymentRoutes_1 = __importDefault(require("./routes/paymentRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use('/api', bookRoutes_1.default);
app.use('/api', autherRoutes_1.default);
app.use('/api', userRoutes_1.default);
app.use('/api', reviewRoutes_1.default);
app.use('/api', ratingRoutes_1.default);
app.use('/api', paymentRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map