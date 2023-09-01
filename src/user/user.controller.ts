import { Controller,Get,Post,Delete,Patch, Req, Param,Body, ParseIntPipe } from '@nestjs/common';
import { Request } from "express";
import { UserService } from './user.service';
import { registerUserDto } from 'src/dto/register-user.dto';
import { loginUserDto } from 'src/dto/login-user.dto';
import { addSelectedPizza } from 'src/dto/add-selected-pizza.dto';
import { fetchCartItems } from 'src/dto/fetch-cart-items.dto';
import { fetchOrders } from 'src/dto/fetch-orders.dto';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    // LEARNING PURPOSE
    
    // @Get()
    // getUsers(){
    //   return this.userService.get();
    // }

    // @Post()
    // storeUser(@Req() req:Request ){
    //     return this.userService.store(req);
    // }

    // @Patch('/:userId')
    // updateUser(@Req() req:Request , @Param() param:{ userId:number}){
    //     return this.userService.update(req, param);
    // }
    
    // @Delete('/:userId')
    // deleteUser ( @Param('userId',ParseIntPipe) userId:number ){
    //     return this.userService.delete(userId)
    // }


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

  // API to add selected pizza

  @Post('add')
  async addPizza(@Body() pizzaData: addSelectedPizza) {
    return this.userService.addPizza(pizzaData);
  }

  // @Get('selected')
  // async getSelectedPizzas(@Body() ) {
  //   return this.userService.getSelectedPizzas();
  // }

   // API to fetch ingredients 

   @Get('list')
  async listIngredients(@Body() data:{ list:string } ) {
    console.log("yes")
    // return this.userService.listIngredients(data);
    return " sourabh"
  }

  // API to fetch cart items for the user
  @Post('cart')
  async cart(@Body() cartData){
    console.log(cartData);
    return this.userService.cartItem(cartData)
  }

  // API to fetch orders
  @Get('orders')
  async orders( @Body() orderDetails: fetchOrders  ){
    return this.userService.orderDetails(orderDetails)
  }

  // API to place orders
  
}
