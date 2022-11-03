import { Module } from '@nestjs/common';
import { IotsService } from './iots.service';
import { IotsController } from './iots.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { IotsSchema } from './schemas/iots.schema';


@Module({
  imports: [MongooseModule.forFeature([{
    name: 'Iot',
    schema: IotsSchema,
  }])],
  providers: [IotsService],
  controllers: [IotsController]
})
export class IotsModule { }
