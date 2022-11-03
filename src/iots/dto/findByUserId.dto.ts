import { IsNotEmpty } from "class-validator";
import { Schema } from "mongoose";

export class FindByUserIdDto {
    @IsNotEmpty()
    id: Schema.Types.ObjectId;
}