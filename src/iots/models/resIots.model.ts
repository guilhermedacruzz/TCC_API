import { Schema } from "mongoose";

export interface ResIots{
    _id: string;
    name: string;
    description : string;
    user: Schema.Types.ObjectId,
    timer: Number,
    ssid: string;
    password: string,
}   