import { Request, Response } from "express";
import { userServices } from "./user.service";
import { userSchemaValidation } from "./user.validation";

const createUser = async(req:Request, res:Response) =>{
    try {
        const userData = req.body;
        const validateData = userSchemaValidation.parse(userData);
        const result = await userServices.createUser(userData);
        res.status(201).json({
            success: true,
            message: "User is created successfully",
            data: result
        })
    } catch (error: any) {
        console.log(error)
        res.status(404).json({
            success: false,
            message: error.message || "User is not created successfully"
        })
    }
}

const getAllUsers = async (req: Request, res: Response) =>{
    try {
        const result = await userServices.getAllUsers();
        res.status(200).json({
            status: true,
            message: "users fetched successfully",
            data: result
        })
    } catch (error:any) {
        console.log(error)
        res.status(404).json({
            success: false,
            message: error.message || "Something went wrong"
        })
    }
}

const getSingleUser =  async(req: Request, res: Response) =>{
    try {
      const userId = req.params.userId;
      const result =  await userServices.getSingleUser(userId);
      res.status(200).json({
        success: true,
        message: "User fetched successfully",
        data: result
      })
    } catch (error:any) {
        console.log(error)
        res.status(404).json({
            success: false,
            message: error.message || "Something went wrong"
        })
    }
}

const updateUser = async(req: Request, res: Response) =>{
    try {
        const userData = req.body;
        const id =  req.params.userId;
        const result = await userServices.updateUser(id, userData)
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: result
        })
    } catch (error:any) {
        console.log(error)
        res.status(404).json({
            success: false,
            message: error.message || "Something went wrong"
        })
    }
}

const deleteUser = async(req: Request, res: Response) =>{
    try {
        const id =  req.params.userId;
        await userServices.deleteUser(id);
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: null
        })
    } catch (error:any) {
        console.log(error)
        res.status(404).json({
            success: false,
            message: error.message || "Something went wrong"
        })
    }
}

const createOrders = async (req:Request, res:Response) =>{
    try {
        const id =  req.params.userId;
        const userData = req.body;
        await userServices.createOrders(id, userData);
        res.status(200).json({
            success: true,
            message: "order created successfully",
            data: null
        })
    } catch (error:any) {
        console.log(error)
        res.status(404).json({
            success: false,
            message: error.message || "Something went wrong"
        })
    }
}

export const userController = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    createOrders
}