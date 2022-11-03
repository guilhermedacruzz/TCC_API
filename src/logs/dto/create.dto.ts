import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Schema } from "mongoose";

export class createDto {
    @IsNotEmpty()
    iot: Schema.Types.ObjectId;

    @IsNotEmpty()
    @IsNumber()
    minutes: Number;

    @IsNotEmpty()
    @IsString()
    status: String;
}