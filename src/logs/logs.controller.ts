import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { LogsService } from './logs.service';

@Controller('logs')
export class LogsController {

    constructor(private readonly logsService: LogsService) {}

    @Post('create')
    @HttpCode(HttpStatus.CREATED)
    public async create(@Body() createDto: CreateDto) {
        return this.logsService.create(createDto);
    }
}
