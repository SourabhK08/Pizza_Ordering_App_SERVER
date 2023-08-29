import { Controller,Get,Post,Delete,Patch, Req, Param } from '@nestjs/common';
import { Request } from "express";
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

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
    deleteUser ( @Param() params:{userId:number} ){
        return this.userService.delete(params)
    }

}
