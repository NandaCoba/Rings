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

    static findManyUser() {
        return prisma.user.findMany({
            select : {
                userId : true
            }
        })
    }


    static findUsername(req : userDto) {
        return prisma.user.findUnique({
            where : {
                username : req.username
            }
        })
    }

    static createUser(req : userDto) {
        return prisma.user.create({
            data : {
                username : req.username!,
                password : req.password!,
                pin : req.pin!
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



    static updatePin(req : userDto) {
        return prisma.user.update({
            where : {
                userId : req.userId
            },
            data : {
                pin : req.pin
            }
        })
    }



}