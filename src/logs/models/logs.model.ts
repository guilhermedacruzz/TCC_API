import { Document, Schema } from "mongoose";

export interface Log extends Document {
    iot: Schema.Types.ObjectId;
    minutes: number, 
    status: string,
    date: Date,
} 