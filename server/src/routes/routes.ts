import express from "express"
import userRoutes from "./user"
import connectionRoutes from "./connection"

const routes = express.Router()


routes.use("/user",userRoutes)
routes.use("/connection",connectionRoutes)


export default routes