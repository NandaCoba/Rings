



export interface connectionDto {
  name?         : string
  description?  : string
  url?          : string
  status?       : boolean
  cors?         : boolean
  rateLimit?    : boolean
  totalTimeLimit? : number
  whenTimeLimit? : string
  active?      : boolean
  userId?       : string
}