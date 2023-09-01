import { Body, Injectable, Param,  } from '@nestjs/common';
import { Request } from 'express';
import { async } from 'rxjs';
import { addSelectedPizza } from 'src/dto/add-selected-pizza.dto';
import { fetchCartItems } from 'src/dto/fetch-cart-items.dto';
import { fetchOrders } from 'src/dto/fetch-orders.dto';
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

  // API to add selected pizza

  addPizza(pizzaData: addSelectedPizza){
    return pizzaData
  }

  // API to fetch ingredients 

  listIngredients(data:{ list:string }){
    return data
  }
  
  // API to fetch cart items for the user
  cartItem(cartData : fetchCartItems){
    return cartData
  }

  // API to fetch orders
  orderDetails(od : fetchOrders){
    return od
  }

}
