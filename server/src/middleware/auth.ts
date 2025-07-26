


import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken"
import { AuthRequest } from "../dto/user";
import fs from "fs"



export const userAuth = (req : AuthRequest,res : Response,next : NextFunction) => {
    const token = req.headers.authorization?.split("Bearer")[1].trim()
    const key = fs.readFileSync("config.json","utf8")
    const keyJson = JSON.parse(key)
    const verify = jwt.verify(token!,keyJson.secret_key!)
    if(!verify) return res.status(401).json({
        message : "unauthorized"
    })
    req.userId = (verify as any).userId
    next()
}