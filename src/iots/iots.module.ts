import { Module } from '@nestjs/common';
import { IotsService } from './iots.service';

@Module({
  providers: [IotsService]
})
export class IotsModule {}
