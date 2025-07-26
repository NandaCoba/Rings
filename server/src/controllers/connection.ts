import { Request, Response } from "express";
import { connectionUsecase } from "../usecase/connection";
import { connectionDto } from "../dto/connection";
import { AuthRequest } from "../dto/user";
import { corsDto } from "../dto/cors";




export class connectionController {


    static async getAllConnection(req : AuthRequest,res : Response) {
        try {
            const { search,page,limit } = req.query
            const userId = req.userId
            const finalRequest : connectionDto = {
                page : Number(page),
                limit : Number(limit),
                search : String(search),
                userId : userId
            } 
            const data = await connectionUsecase.getAllConnection(finalRequest)
            return res.status(200).json({
                data : data
            })
        } catch (error : any) {
            console.error(error)
            return res.status(500).json({
                message : error.message
            })
        }
    }



    static async updateStatusConnection(req : AuthRequest,res : Response) {
        try {
            const { connectionId } = req.params
            const userId = req.userId
            const finalRequest : connectionDto = {
                connectionId : Number(connectionId),
                userId : userId
            } 
            const data = await connectionUsecase.updateStatusConnection(finalRequest)
            return res.status(200).json({
                data : data
            })
        } catch (error : any) {
            console.error(error)
            return res.status(500).json({
                message : error.message
            })
        }
    }


    static async createConnection(req : AuthRequest,res : Response) {
        try {
            const { name,url,cors,rateLimit,totalTimeLimit,whenTimeLimit } = req.body
            const userId = req.userId
            const finalRequest : connectionDto = {
                name,
                url,
                cors,
                rateLimit,
                totalTimeLimit,
                whenTimeLimit,
                userId
            } 
            const data = await connectionUsecase.createConnection(finalRequest)
            return res.status(200).json({
                data : data
            })
        } catch (error : any) {
            console.error(error)
            return res.status(500).json({
                message : error.message
            })
        }
    }


    static async createCorsConnection(req : AuthRequest,res : Response) {
        try {
            const { connectionId,urlCors } = req.body
            const userId = req.userId
            const finalRequest : corsDto = {
                urlCors,
                connectionId
            } 
            const data = await connectionUsecase.createCorsConnection(finalRequest)
            return res.status(200).json({
                data : data
            })
        } catch (error : any) {
            console.error(error)
            return res.status(500).json({
                message : error.message
            })
        }
    }


}