import express from "express"
import { Request,Response } from "express"
import cors from "cors"
import routes from "./src/routes/routes"
import fs from "fs"

const app = express()
const port : any = fs.readFileSync("config.json","utf-8")
const portParse = JSON.parse(port)

app.use(cors())
app.use(express.json())

app.use("/api/v1",routes)

app.get("/port",(req : Request,res : Response) => {
    const port = fs.readFileSync("config.json","utf-8")
    const portParse = JSON.parse(port)
    return portParse.port
})


app.listen(portParse.port,() => {
    console.log("Save Palestine 🍉")
    console.log(`Server is listening on http://localhost:${portParse.port}/`)
})



