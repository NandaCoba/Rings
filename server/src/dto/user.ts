import { Request } from "express"


export interface userDto {
   userId?    : string
   username?  : string
   password?  : string  
   image?     : string
   oldPassword? : string
   oldPin? : string
   pin? : string
   confirmPassword? : string
}


export interface AuthRequest extends Request {
    userId? : string
}