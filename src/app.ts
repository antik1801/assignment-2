import express, { Application, Request, Response } from "express"
import cors from "cors"
import { userRoutes } from "./models/user/user.routes"
const app: Application = express()

app.use(express.json())
app.use(cors())

// user routes
app.use("/api/users", userRoutes)

app.get('/', (req:Request, res:Response) => {
  try {
    res.status(200).json({
        success: true,
        message: "Welcome to Assignment 2"
    })
  } catch (error:any) {
    res.status(404).json({
        success: false,
        messase: error.message || "Something went wrong"
    })
  }
})

export default app;