import { Request } from "express"


export interface userDto {
   userId?    : string
   username?  : string
   password?  : string  
   image?     : string
}


export interface AuthRequest extends Request {
    userId? : string
}