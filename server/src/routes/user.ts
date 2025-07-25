import express from "express"
import { userController } from "../controllers/user"
import { userAuth } from "../middleware/auth"

const routes = express.Router()



routes.post("/login",userController.login)
routes.post("/register",userController.register)
routes.put("/update_password",userAuth,userController.register)
routes.put("/update_user",userAuth, userController.register)

export default routes