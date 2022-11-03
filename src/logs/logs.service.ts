import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDto } from './dto/create.dto';
import { Log } from './models/logs.model';
import { ResLogs } from './models/resLogs.model';

@Injectable()
export class LogsService {
    constructor(
        @InjectModel('Log')
        private readonly logsModel: Model<Log>,
    ) { }

    public async create(createDto: CreateDto): Promise<ResLogs> {
        const log = new this.logsModel(createDto);
        log.save();

        return { _id: log.id, minutes: log.minutes, status: log.status, date: log.date };
    }
}
