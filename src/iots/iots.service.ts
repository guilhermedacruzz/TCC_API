import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDto } from './dto/create.dto';
import { FindByIdDto } from './dto/findById.dto';
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

    public async findById(findByIdDto: FindByIdDto): Promise<Iot[]> {
        const allIots = await this.findAll();
        var iotsById = [];
        for(var i = 0; i < allIots.length; i++) {
            if(allIots[i].user == findByIdDto.id) {
                iotsById.push(allIots[i]);
            }
        }
        return iotsById;
    }
}
