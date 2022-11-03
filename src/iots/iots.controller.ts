import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { FindByIdDto } from './dto/findById.dto';
import { IotsService } from './iots.service';
import { Iot } from './models/iots.model';
import { Res } from './models/res.model';

@Controller('iots')
export class IotsController {

    constructor(private readonly iotsService: IotsService) {}

    @Post('create')
    @HttpCode(HttpStatus.CREATED)
    public async create(@Body() createDto: CreateDto): Promise<Res> {
        return this.iotsService.create(createDto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    public async findAll(): Promise<Iot[]> {
        return this.iotsService.findAll();
    }

    @Get('byId')
    @HttpCode(HttpStatus.OK)
    public async findById(@Body() findById: FindByIdDto): Promise<Iot[]> {
        return this.iotsService.findById(findById);
    }
}
