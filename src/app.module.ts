import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { IotsController } from './iots/iots.controller';
import { IotsModule } from './iots/iots.module';

@Module({
  imports: [
    UsersModule, 
    AuthModule, 
    MongooseModule.forRoot(process.env.MONGO_URI), IotsModule,
  ],
  controllers: [AppController, IotsController],
  providers: [AppService],
})
export class AppModule { }
