import { Schema } from "mongoose";


export const LogsSchema = new Schema({
    iot: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Iot',
    },
    minutes: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true, 
    },
    date: {
        type: Date,
        default: Date.now,
    }
});