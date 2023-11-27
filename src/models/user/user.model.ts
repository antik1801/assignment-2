import { Schema, model } from "mongoose";
import {IAddress, IFullName, IOrders, IUser} from "./user.interface";
import bcrypt from 'bcrypt'
import config from "../../config";

export const userFullNameSchema = new Schema<IFullName>({
    firstName: {
        type: String,
        required: [true, "Please tell us your firstname"]
    },
    lastName: {
        type: String,
        required: [true, "Please tell us your lastname"]
    }
})

export const userAddressSchema = new Schema<IAddress>({
    city: {
        type: String,
        required: [true, "Please tell us your city"]
    },
    street: {
        type: String,
        required: [true, "Please tell us your street"]
    },
    country: {
        type: String,
        required: [true, "Please tell us your country"]
    }
})

export const orderSchema = new Schema<IOrders>({
    productName:{
        type: String,
    },
    price: {
        type: Number,
       
    },
    quantity: {
        type: Number,
       
    }
})

export const userSchema = new Schema<IUser>({
    userId:{
        type: Number,
        required: [true, "Please tell us your userID"],
        unique: true,
    },
    userName: {
        type: String,
        required: [true, "Please tell us your username"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please tell us your password"],
    },
    fullName: {
        type: userFullNameSchema,
        required: true
    },
    age: {
        type: Number,
        required: [true, "Please tell us your age"],
    },
    email: {
        type: String,
        required: [true, "Please tell us your email address"],
    },
    isActive: {
        type: Boolean,
        default: true
    },
    hobbies: {
        type: [String],
        required: true,
        validate: {
            validator: (array: string[]) => array.length > 0, // Validate that hobbies array has at least one item
            message: 'Please provide at least one hobby',
        },
    },
    address: {
        type: userAddressSchema,
        required: [true, "Please tell us your email address"]
    },
    order:{
        type: [orderSchema],
        default: []
    }
})

userSchema.pre('save',async function(next){
   
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this;
    user.password = await bcrypt.hash(user.password, Number(config.bycrypt_salt)) ;
    next();
})

userSchema.post('save', function(doc,next){
    doc.password="";
    next();
})


export const User = model<IUser>('User', userSchema);
export const Order = model<IOrders>('Order', orderSchema)