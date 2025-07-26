import express from "express"
import { userAuth } from "../middleware/auth"
import { connectionController } from "../controllers/connection"

const routes = express.Router()


routes.get("/",userAuth,connectionController.getAllConnection)
routes.post("/",userAuth,connectionController.createConnection)
routes.post("/cors_connection",userAuth,connectionController.createCorsConnection)
routes.put("/update_status/:connectionId",userAuth,connectionController.updateStatusConnection)



export default routes