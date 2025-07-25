import express from "express"
import userRoutes from "./user"

const routes = express.Router()


routes.use("/user",userRoutes)



export default routes