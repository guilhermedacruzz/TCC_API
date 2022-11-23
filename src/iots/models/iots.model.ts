import { Document, Schema } from "mongoose";

export interface Iot extends Document {
    name: string;
    description : string;
    user: Schema.Types.ObjectId,
    timer: Number,
    ssid: string,
    password: string
}   