import express from "express"
import { Request,Response } from "express"
import cors from "cors"
import routes from "./src/routes/routes"

const app = express()
const port : Number = 4040

app.use(cors())
app.use(express.json())

app.use("/api/v1",routes)


app.listen(port,() => {
    console.log("Save Palestine 🍉")
    console.log(`Server is listening on http://localhost:${port}/`)
})



