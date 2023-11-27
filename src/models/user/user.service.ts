import { IOrders, IUser } from "./user.interface";
import { User } from "./user.model";


const createUser =async (userData : IUser) : Promise<IUser> =>{
    const result = await User.create(userData)
    // const filteredResult = await User.findById(result._id).select({userId: 1, username: 1 ,fullName: 1, age: 1, email: 1, isActive: 1, hobbies: 1, address: 1})
    return result;
}

const getAllUsers = async() : Promise<IUser[]> =>{
    const result = await User.find({},{userId: 1, userName: 1 ,fullName: 1, age: 1, email: 1, isActive: 1, hobbies: 1, address: 1});
    return result
}

const getSingleUser = async(id: string): Promise<IUser | null> =>{
    const result = await User.findOne({userId: id},{userId: 1, userName: 1 ,fullName: 1, age: 1, email: 1, isActive: 1, hobbies: 1, address: 1})
    return result
}

const updateUser = async(id: string, userData: IUser): Promise<IUser | null> =>{
    const result = await User.findOneAndUpdate({userId:id}, userData, {
        new: true,
        runValidators: true
    }).select({userId: 1, userName: 1 ,fullName: 1, age: 1, email: 1, isActive: 1, hobbies: 1, address: 1})
    return result
}

const deleteUser = async(id: string): Promise<IUser | null> =>{
    const result = await User.findOneAndDelete({userId: id})
    return result
}

const createOrders = async(id: string, userData: IUser) =>{
    const result = await User.findOneAndUpdate({userId: id}, userData, {
        new: true,
        runValidators: true
    }).select({order: 1})
    return result
}


export const userServices = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    createOrders
}