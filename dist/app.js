"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = require("./models/user/user.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// user routes
app.use('/api/users', user_routes_1.userRoutes);
app.get('/', (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: 'Welcome to Assignment 2',
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            messase: error.message || 'Something went wrong',
        });
    }
});
exports.default = app;
