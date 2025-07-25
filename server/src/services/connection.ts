import { connectionDto } from "../dto/connection";
import { prisma } from "../utils/general";




export class connectionService {

    static getAllConnection () {
        return prisma.connection.findMany()
    }


    static createConnection (req : connectionDto) {
        return prisma.connection.create({
            data : {
                name : req.name!,

            }
        })
    }
}