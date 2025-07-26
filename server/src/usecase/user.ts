import { userDto } from "../dto/user"
import { userService } from "../services/user"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { createFile } from "../utils/file"
import fs from "fs"



export class userUsecase {


    static async register(req : userDto) {
        try {
            const findUser = await userService.findUsername(req)
            if(findUser) throw new Error("user available")
            const hashPassword = bcrypt.hashSync(req.password!,10)
            const hashPin = bcrypt.hashSync(req.pin!,10)
            
            const finalData : userDto = {
                username : req.username,
                password : hashPassword,
                pin : hashPin
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
            const findUser = await userService.findUsername(req)
            if(!findUser) throw new Error("username or password wrong")

            const comparePassword = bcrypt.compareSync(req.password!,findUser.password!)
            if(!comparePassword) throw new Error("username or password wrong")

            const key = fs.readFileSync("config.json","utf8")
            const keyJson = JSON.parse(key)
            const payload = { userId : findUser.userId }
            const token = jwt.sign(payload,keyJson.secret_key,{ expiresIn : "1d" })
            return { message : "Login Success", token  }
        } catch (error : any) {
            console.error(error)
            throw new Error(error.message)
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
            const findUser = await userService.findUser(req)
            if(!findUser) throw new Error("user not available")

            const checkOldPass = bcrypt.compareSync(req.oldPassword!,findUser.password)
            if(!checkOldPass) throw new Error("password not match")

            const hash = bcrypt.hashSync(req.password!,10)
            req.password = hash

            const updatePassword = await userService.updatePassword(req)
            if(!updatePassword) throw new Error("failed update password")
            return "success update password"
        } catch (error : any) {
            console.error(error)
            throw new Error(error)
        }
    }
    
    static async updatePin(req : userDto) {
        try {
            const findUser = await userService.findUser(req)
            if(!findUser) throw new Error("user not available")


            const checkOldPin = bcrypt.compareSync(req.oldPin!,findUser.pin)
            if(!checkOldPin) throw new Error("pin not match")

            if(req.pin?.length! > 6 || req.pin?.length! < 6 ) throw new Error("pin length 6")

            const hash = bcrypt.hashSync(req.pin!,10)
            req.pin = hash

            const updatePin = await userService.updatePin(req)
            if(!updatePin) throw new Error("failed update pin")
            return "success update pin"
        } catch (error : any) {
            console.error(error)
            throw new Error(error)
        }
    }



    static async forgotPassword(req : userDto) {
        try {
            const findUser = await userService.findUser(req)
            if(!findUser) throw new Error("user not available")

            const comparePin = bcrypt.compareSync(req.pin!,findUser.pin)
            if(!comparePin) throw new Error("Pin not match")

            const hashPassword = bcrypt.hashSync(req.password!,10)
            const finalRequest : userDto= {
                userId : findUser.userId,
                password : hashPassword
            }
            const changePassword = await userService.updatePassword(finalRequest)
            if(!changePassword) throw new Error("failed change new password")
            return "success change password"
        } catch (error : any) {
            console.error(error)
            throw new Error(error)
        }
    }


    static async getAllUser() {
        try {
            return await userService.findManyUser()
        } catch (error : any) {
            console.error(error)
            throw new Error(error)
        }
    }

    

    

}