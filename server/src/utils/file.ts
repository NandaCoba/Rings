import fs from "fs"
import { v4 } from "uuid"


export const createFile = async () => {
    try {
        const key = {
            "secret_key" : v4()
        }
        fs.writeFileSync("config.json",JSON.stringify(key))
    } catch (error) {
        console.error(error)
    }
}