import { userDto } from "../dto/user";
import { prisma } from "../utils/general";




export class userService {

    static findUser(req : userDto) {
        return prisma.user.findUnique({
            where : {
                userId : req.userId
            }
        })
    }

    static createUser(req : userDto) {
        return prisma.user.create({
            data : {
                username : req.username!,
                password : req.password!
            }
        })
    }

    static updateUser(req : userDto) {
        return prisma.user.update({
            where : {
                userId : req.userId,
            },
            data : {
                username : req.username,
                image    : req.image
            }
        })
    }

    static updatePassword(req : userDto) {
        return prisma.user.update({
            where : {
                userId : req.userId
            },
            data : {
                password : req.password
            }
        })
    }



}