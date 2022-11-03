import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { Schema } from "mongoose";

export class CreateDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    description: string;

    @IsNotEmpty()
    user: Schema.Types.ObjectId;
}