"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchemaValidation = void 0;
const zod_1 = require("zod");
// Define Zod schemas for each subfield
const fullNameValidation = zod_1.z.object({
    firstName: zod_1.z.string().nonempty({ message: 'Please tell us your firstname' }),
    lastName: zod_1.z.string().nonempty({ message: 'Please tell us your lastname' }),
});
const addressValidation = zod_1.z.object({
    city: zod_1.z.string().nonempty({ message: 'Please tell us your city' }),
    street: zod_1.z.string().nonempty({ message: 'Please tell us your street' }),
    country: zod_1.z.string().nonempty({ message: 'Please tell us your country' }),
});
const orderValidation = zod_1.z.object({
    productName: zod_1.z
        .string()
        .nonempty({ message: 'Please tell us your product name' }),
    price: zod_1.z.number().positive({ message: 'Please provide a valid price' }),
    quantity: zod_1.z.number().positive({ message: 'Please provide a valid quantity' }),
});
// Define Zod schema for the main user object
const userValidation = zod_1.z.object({
    userId: zod_1.z
        .number()
        .int()
        .positive({ message: 'Please provide a valid userID' }),
    userName: zod_1.z.string().nonempty({ message: 'Please tell us your username' }),
    password: zod_1.z.string().nonempty({ message: 'Please tell us your password' }),
    fullName: fullNameValidation,
    age: zod_1.z.number().int().positive({ message: 'Please provide a valid age' }),
    email: zod_1.z.string().email({ message: 'Please provide a valid email address' }),
    isActive: zod_1.z.boolean().default(true),
    hobbies: zod_1.z
        .array(zod_1.z.string())
        .nonempty({ message: 'Please provide at least one hobby' }),
    address: addressValidation,
    orders: zod_1.z.array(orderValidation).optional(),
});
exports.userSchemaValidation = userValidation;
