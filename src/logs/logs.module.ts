import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogsController } from './logs.controller';
import { LogsService } from './logs.service';
import { LogsSchema } from './schemas/logs.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'Log',
    schema: LogsSchema,
  }])],
  controllers: [LogsController],
  providers: [LogsService]
})
export class LogsModule {}
