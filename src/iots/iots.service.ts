import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDto } from './dto/create.dto';
import { Iot } from './models/iots.model';
import { Res } from './models/res.model';

@Injectable()
export class IotsService {
    constructor(
        @InjectModel('Iot')
        private readonly iotsModel: Model<Iot>,
    ){}

    public async create(createDto: CreateDto): Promise<Res> {
        const iot = new this.iotsModel(createDto);
        iot.save();

        return {_id: iot._id, name: iot.name, description: iot.description};
    }

    public async findAll(): Promise<Iot[]> {
        return this.iotsModel.find();
    }
}
