import { Body, Injectable, Param,  } from '@nestjs/common';
import { Request } from 'express';
import { async } from 'rxjs';
import { loginUserDto } from 'src/dto/login-user.dto';
import { registerUserDto } from 'src/dto/register-user.dto';

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

  delete(userId:number){
    return { userId}
  }

  // API to REGISTER / LOGIN USER
  register(param: registerUserDto){
    return  param
  }

  login( data: loginUserDto){
    return data
  }


}
