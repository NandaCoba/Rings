import { connectionDto } from "../dto/connection";
import { corsDto } from "../dto/cors";
import { connectionService } from "../services/connection";



export class connectionUsecase {


    static async getAllConnection(req :connectionDto) {
        try {
            const data = await connectionService.getAllConnection(req)
            return data
        } catch (error : any) {
            throw new Error(error)
        }
    }


    static async updateStatusConnection(req : connectionDto) {
        try {
            let status;
            let checkStatusOld = await connectionService.getOneConnection(req)
            if(checkStatusOld?.status === false) status = true
            else if(checkStatusOld?.status === true) status = false
            const data = await connectionService.updateStatusConnection({ connectionId : req.connectionId,status})
            return data
        } catch (error : any) {
            throw new Error(error)
        }
    }



    static async createConnection(req : connectionDto) {
        try {
            if(req.name === "" || req.url === "") throw new Error("please insert input")
            const data = await connectionService.createConnection(req)
            return data
        } catch (error : any) {
            console.error(error)
        }
    }


    static async createCorsConnection(req : corsDto) {
        try {
            if(req.connectionId === 0 || req.urlCors === "") throw new Error("please insert input")
            const data = await connectionService.createCorsConnection(req)
            return data
        } catch (error : any) {
            console.error(error)
        }
    }
}