import { Request, Response } from "express"
import { AuthRequest, userDto } from "../dto/user"
import { userUsecase } from "../usecase/user"





export class userController {


    static async register(req : Request,res : Response) {
        try {
            const { username,password } = req.body
            const finalRequest : userDto= {
                username, password 
            }
            const data = await userUsecase.register(finalRequest)

            return res.status(200).json({
                data : data
            })
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                message : error
            })
        }
    }


    static async login(req : Request,res : Response) {
        try {
            const { username,password } = req.body
            const finalRequest : userDto= {
                username, password 
            }
            const data = await userUsecase.login(finalRequest)

            return res.status(200).json({
                data : data
            })
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                message : error
            })
        }
    }




    static async updateUser(req : AuthRequest,res : Response) {
        try {
            const { username,image } = req.body
            const userId = req.userId
            const finalRequest : userDto= {
                username, image,userId
            }
            const data = await userUsecase.login(finalRequest)

            return res.status(200).json({
                data : data
            })
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                message : error
            })
        }
    }



    static async updatePassword(req : AuthRequest,res : Response) {
        try {
            const { password } = req.body
            const userId = req.userId
            const finalRequest : userDto= { password,userId }
            const data = await userUsecase.login(finalRequest)

            return res.status(200).json({
                data : data
            })
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                message : error
            })
        }
    }
}