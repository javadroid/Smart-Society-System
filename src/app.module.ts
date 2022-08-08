/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CauseOfCrimeModule } from './cause-of-crime/cause-of-crime.module';
import { CrimeOffendersModule } from './crime-offenders/crime-offenders.module';
import { PrisonWardModule } from './prison-ward/prison-ward.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/Smart-Society-System'),CauseOfCrimeModule, PrisonWardModule, CrimeOffendersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
