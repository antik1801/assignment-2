"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
// import { userSchemaValidation } from "./user.validation";
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        // const validateData = userSchemaValidation.parse(userData);
        const result = yield user_service_1.userServices.createUser(userData);
        res.status(201).json({
            success: true,
            message: 'User is created successfully',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({
            success: false,
            message: error.message || 'User is not created successfully',
        });
    }
});
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.userServices.getAllUsers();
        res.status(200).json({
            status: true,
            message: 'users fetched successfully',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({
            success: false,
            message: error.message || 'Something went wrong',
        });
    }
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const result = yield user_service_1.userServices.getSingleUser(userId);
        res.status(200).json({
            success: true,
            message: 'User fetched successfully',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({
            success: false,
            message: error.message || 'Something went wrong',
        });
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const id = req.params.userId;
        const result = yield user_service_1.userServices.updateUser(id, userData);
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({
            success: false,
            message: error.message || 'Something went wrong',
        });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.userId;
        yield user_service_1.userServices.deleteUser(id);
        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            data: null,
        });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({
            success: false,
            message: error.message || 'Something went wrong',
        });
    }
});
const createOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.userId;
        const userData = req.body;
        yield user_service_1.userServices.createOrders(id, userData);
        res.status(200).json({
            success: true,
            message: 'order created successfully',
            data: null,
        });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({
            success: false,
            message: error.message || 'Something went wrong',
        });
    }
});
exports.userController = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    createOrders,
};
