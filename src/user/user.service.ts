import { Injectable, Req } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
  
  get() : String {
    return '{ name: "sourabh kakani" , email: "sk@gmail.com" }'
}

  store(req:Request ){
    return req.body
  }

  update ( req:Request, param:{userId:number}){
    return { body:req.body, param}
  }

  delete(param: {userId:number}){
    return param
  }

}
