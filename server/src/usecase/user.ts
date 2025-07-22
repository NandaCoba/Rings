import { userDto } from "../dto/user"
import { userService } from "../services/user"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { createFile } from "../utils/file"
import fs from "fs"



export class userUsecase {


    static async register(req : userDto) {
        try {
            const findUser = await userService.findUser(req)
            if(findUser) throw new Error("user available")
            const hashPassword = bcrypt.hashSync(req.password!,10)
            
            const finalData : userDto = {
                username : req.username,
                password : hashPassword
            }
            await userService.createUser(finalData)
            
            await createFile()

            return "success create user"
        } catch (error : any) {
            console.error(error)
            throw new Error(error)
        }
    }


    static async login(req : userDto) {
        try {
            const findUser = await userService.findUser(req)
            if(!findUser) throw new Error("username or password wrong")

            const comparePassword = bcrypt.compareSync(req.password!,findUser.password!)
            if(!comparePassword) throw new Error("username or password wrong")

            const key = fs.readFileSync("secret_key")
            const token = jwt.sign(findUser.userId,key,{ expiresIn : "1d" })
            return { message : "Login Success", token  }
        } catch (error : any) {
            console.error(error)
            throw new Error(error)
        }
    }    


    static async updateUser(req : userDto) {
        try {
            const oldData = await userService.findUser(req)
            if(req.username === "") req.username = oldData?.username
            if(req.image === "") req.image = oldData?.image!

            const update = await userService.updateUser(req)
            if(!update) throw new Error("failed update user")

            return "success update user"
        } catch (error : any) {
            console.error(error)
            throw new Error(error)
        }
    }
    

    static async updatePassword(req : userDto) {
        try {
            const updatePassword = await userService.updatePassword(req)
            if(!updatePassword) throw new Error("failed update password")
            return "success update password"
        } catch (error : any) {
            console.error(error)
            throw new Error(error)
        }
    }
    
    

}