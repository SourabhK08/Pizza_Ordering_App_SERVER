import { IsNumber, IsString } from "class-validator";

export class addSelectedPizza{

    @IsString()
    varient:string;

    @IsString()
    ingredients:string;

    @IsNumber()
    quantity:number;

    @IsNumber()
    price:number;
}