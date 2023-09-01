import { IsNumber, IsString } from "class-validator";

export class fetchOrders{
    @IsString()
    name:string;

    @IsNumber()
    qt:number;

    @IsString()
    size:string;

    @IsNumber()
    price:number;
}