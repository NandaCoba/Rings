import express from "express"
import { Request,Response } from "express"
import cors from "cors"
import routes from "./src/routes/routes"
import fs from "fs"

const app = express()
const port : any = process.env.APP_PORT


app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))
app.use(express.json())

app.use("/api/v1",routes)




app.listen(port,'0.0.0.0',() => {
    console.log("Save Palestine 🍉")
    console.log(`Server RUNNING`)
})



