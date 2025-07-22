


import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken"
import { AuthRequest } from "../dto/user";



export const userAuth = (req : AuthRequest,res : Response,next : NextFunction) => {
    const token = req.headers.authorization?.split("Bearer")[1].trim()
    const secretKey = process.env.SECRET_KEY
    const verify = jwt.verify(token!,secretKey!)
    if(!verify) return res.status(401).json({
        message : "unauthorized"
    })
    req.userId = (verify as any).userId
    next()
}