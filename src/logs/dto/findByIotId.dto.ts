import { IsNotEmpty } from "class-validator";
import { Schema } from "mongoose";

export class FindByIotIdDto {
    @IsNotEmpty()
    id: Schema.Types.ObjectId;
}