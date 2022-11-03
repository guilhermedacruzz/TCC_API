import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { FindByUserIdDto } from './dto/findByUserId.dto';
import { IotsService } from './iots.service';
import { Iot } from './models/iots.model';
import { ResIots } from './models/resIots.model';

@Controller('iots')
export class IotsController {

    constructor(private readonly iotsService: IotsService) {}

    @Post('create')
    @HttpCode(HttpStatus.CREATED)
    public async create(@Body() createDto: CreateDto): Promise<ResIots> {
        return this.iotsService.create(createDto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    public async findAll(): Promise<Iot[]> {
        return this.iotsService.findAll();
    }

    @Get('byUserId')
    @HttpCode(HttpStatus.OK)
    public async findById(@Body() findByUserIdDto: FindByUserIdDto): Promise<Iot[]> {
        return this.iotsService.findByUserId(findByUserIdDto);
    }
}
