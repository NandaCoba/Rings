import { connectionDto } from "../dto/connection";
import { corsDto } from "../dto/cors";
import { prisma } from "../utils/general";




export class connectionService {

    static getAllConnection (req : connectionDto) {
        return prisma.connection.findMany({
            where : {
                userId : req.userId,
                // name : req.search
            },
            skip : req.page ? (req.page! - 1) * req.limit! : 0,
            take : req.limit ? req.limit : 10
        })
    }

    static getOneConnection (req : connectionDto) {
        return prisma.connection.findFirst({
            where : {
                userId : req.userId,
                connectionId : req.connectionId
            }
        })
    }

    static createConnection (req : connectionDto) {
        return prisma.connection.create({
            data : {
                name : req.name!,
                userId : req.userId!,
                description : req.description,
                url : req.url!,
                status : false,
                cors : req.cors,
                rateLimit : req.rateLimit,
                totalTimeLimit : req.totalTimeLimit,
                whenTimeLimit : req.whenTimeLimit,
            }
        })
    }

    static updateConnection (req : connectionDto) {
        return prisma.connection.update({
            where : {
                connectionId : req.connectionId,
            },
            data : {
                name : req.name!,
                description : req.description,
                url : req.url!,
                status : false,
                cors : req.cors,
                rateLimit : req.rateLimit,
                totalTimeLimit : req.totalTimeLimit,
                whenTimeLimit : req.whenTimeLimit,
            }
        })
    }


    static deleteConnection (req : connectionDto) {
        return prisma.connection.delete({
            where : {
                connectionId : req.connectionId,
            }
        })
    }


    static updateStatusConnection (req : connectionDto) {
        return prisma.connection.update({
            where : {
                connectionId : req.connectionId,
            },
            data : {
                status : req.status
            }
        })
    }



    static createCorsConnection (req : corsDto) {
        return prisma.listCors.create({
            data : {
                urlCors : req.urlCors!,
                connectionId : req.connectionId!,
            }
        })
    }

}