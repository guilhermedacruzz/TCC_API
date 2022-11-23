import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { FindByIotIdDto } from './dto/findByIotId.dto';
import { LogsService } from './logs.service';
import { Log } from './models/logs.model';

@Controller('logs')
export class LogsController {

    constructor(private readonly logsService: LogsService) {}

    @Post('create')
    @HttpCode(HttpStatus.CREATED)
    public async create(@Body() createDto: CreateDto) {
        return this.logsService.create(createDto);
    }

    @Get('byIotId')
    @HttpCode(HttpStatus.OK)
    public async findById(@Body() findByIotIdDto: FindByIotIdDto): Promise<Log[]> {
        return this.logsService.findByIotId(findByIotIdDto);
    }
}
