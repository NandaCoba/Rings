import { PrismaClient } from "@prisma/client";
import fs from "fs"


export const prisma = new PrismaClient()
const port = fs.readFileSync("config.json","utf-8")
const portParse = JSON.parse(port)
