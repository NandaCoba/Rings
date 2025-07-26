



export interface connectionDto {
  connectionId?   : number
  name?           : string
  description?    : string
  url?            : string
  status?         : any
  cors?           : boolean
  rateLimit?      : boolean
  totalTimeLimit? : number
  whenTimeLimit?  : string
  userId?         : string
  page?           : number
  limit?          : number
  search?         : string
}