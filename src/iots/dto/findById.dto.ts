import { IsNotEmpty } from "class-validator";
import { Schema } from "mongoose";

export class FindByIdDto {
    @IsNotEmpty()
    id: Schema.Types.ObjectId;
}