import { Controller,Get,Post,Delete,Patch, Req, Param,Body, ParseIntPipe } from '@nestjs/common';
import { Request } from "express";
import { UserService } from './user.service';
import { registerUserDto } from 'src/dto/register-user.dto';
import { loginUserDto } from 'src/dto/login-user.dto';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    // LEARNING PURPOSE
    
    @Get()
    getUsers(){
      return this.userService.get();
    }

    @Post()
    storeUser(@Req() req:Request ){
        return this.userService.store(req);
    }

    @Patch('/:userId')
    updateUser(@Req() req:Request , @Param() param:{ userId:number}){
        return this.userService.update(req, param);
    }
    
    @Delete('/:userId')
    deleteUser ( @Param('userId',ParseIntPipe) userId:number ){
        return this.userService.delete(userId)
    }


    // API to REGISTER / LOGIN USER
    
    @Post('register')
    async registerUser(@Body() params: registerUserDto ) {
    const loginResult = await this.userService.register(params);
    return loginResult;
}

    //async is used handle asynchronous operations in a clean and efficient way when interacting with bd, making http req .

    @Post('login')
  async login(@Body() data: loginUserDto) {
    const loginResult = await this.userService.login(data);
    return loginResult;
  }
}
