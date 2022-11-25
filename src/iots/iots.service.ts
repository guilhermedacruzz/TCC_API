import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDto } from './dto/create.dto';
import { FindByUserIdDto } from './dto/findByUserId.dto';
import { Iot } from './models/iots.model';
import { ResIots } from './models/resIots.model';

@Injectable()
export class IotsService {
    constructor(
        @InjectModel('Iot')
        private readonly iotsModel: Model<Iot>,
    ) { }

    public async create(createDto: CreateDto): Promise<ResIots> {
        const iot = new this.iotsModel(createDto);
        iot.save();

        return { _id: iot._id, name: iot.name, description: iot.description, user: iot.user, timer: iot.timer, ssid: iot.ssid, password: iot.password };
    }

    public async findAll(): Promise<Iot[]> {
        return this.iotsModel.find();
    }

    public async findByUserId(findByUserIdDto: FindByUserIdDto): Promise<Iot[]> {
        const allIots = await this.findAll();
        var iotsById = [];
        for (var i = 0; i < allIots.length; i++) {
            if (allIots[i].user == findByUserIdDto.id) {
                iotsById.push(allIots[i]);
            }
        }
        return iotsById;
    }
}
