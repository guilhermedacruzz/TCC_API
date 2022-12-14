import { Schema } from "mongoose";

export const IotsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    timer: {
        type: Number,
        required: true,
    },
    ssid: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});