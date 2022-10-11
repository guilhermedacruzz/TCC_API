import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt";

export const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
});

UsersSchema.pre('save', async function (next: mongoose.CallbackWithoutResultAndOptionalError) {
    try {
        if (!this.isModified('password')) {
            return next();
        }

        this['password'] = await bcrypt.hash(this['password'], 10);
    }
    catch (error) {
        return next(error);
    }
});

UsersSchema.pre('findOneAndUpdate', async function (this) {
    let update = {...this.getUpdate()};
    if(update['password']) {
        update['password'] = await bcrypt.hash(this.getUpdate()['password'], 10);
        this.setUpdate(update);
    }
});


