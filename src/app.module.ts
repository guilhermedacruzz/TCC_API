import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { IotsModule } from './iots/iots.module';
import { LogsController } from './logs/logs.controller';
import { LogsService } from './logs/logs.service';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    IotsModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    LogsModule,
  ],
  controllers: [AppController, LogsController],
  providers: [AppService, LogsService],
})
export class AppModule { }
