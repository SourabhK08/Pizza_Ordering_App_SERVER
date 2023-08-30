import { IsEmail, IsNumber, IsString } from "class-validator";

export class registerUserDto {
    @IsString()
    userName: string;

    @IsNumber()
    userNumber: number;

    @IsEmail()
    userEmail: string;

    @IsString()
     userPassword: string; 
}