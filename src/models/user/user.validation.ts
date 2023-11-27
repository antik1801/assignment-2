import { z } from 'zod';

// Define Zod schemas for each subfield

const fullNameValidation = z.object({
    firstName: z.string().nonempty({ message: "Please tell us your firstname" }),
    lastName: z.string().nonempty({ message: "Please tell us your lastname" }),
});

const addressValidation = z.object({
    city: z.string().nonempty({ message: "Please tell us your city" }),
    street: z.string().nonempty({ message: "Please tell us your street" }),
    country: z.string().nonempty({ message: "Please tell us your country" }),
});

const orderValidation = z.object({
    productName: z.string().nonempty({ message: "Please tell us your product name" }),
    price: z.number().positive({ message: "Please provide a valid price" }),
    quantity: z.number().positive({ message: "Please provide a valid quantity" }),
});

// Define Zod schema for the main user object

const userValidation = z.object({
    userId: z.number().int().positive({ message: "Please provide a valid userID" }),
    userName: z.string().nonempty({ message: "Please tell us your username" }),
    password: z.string().nonempty({ message: "Please tell us your password" }),
    fullName: fullNameValidation,
    age: z.number().int().positive({ message: "Please provide a valid age" }),
    email: z.string().email({ message: "Please provide a valid email address" }),
    isActive: z.boolean().default(true),
    hobbies: z.array(z.string()).nonempty({ message: "Please provide at least one hobby" }),
    address: addressValidation,
    orders: z.array(orderValidation).optional(),
});

export { userValidation as userSchemaValidation };
