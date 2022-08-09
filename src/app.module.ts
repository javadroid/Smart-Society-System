/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CauseOfCrimeModule } from './cause-of-crime/cause-of-crime.module';
import { PrisonModule } from './prison/prison.module';
import { OffendersModule } from './offenders/offenders.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/Timeline'),CauseOfCrimeModule, PrisonModule, OffendersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
