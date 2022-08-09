/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseEntityModule } from './base-entity/base-entity.module';
import { CauseOfCrimeModule } from './cause-of-crime/cause-of-crime.module';
import { CorrectionCentersModule } from './correction-centers/correction-centers.module';
import { CourtChargeModule } from './court-charge/court-charge.module';
import { CrimeOffendersModule } from './crime-offenders/crime-offenders.module';
import { CrimesModule } from './crimes/crimes.module';
import { OffencesModule } from './offences/offences.module';
import { OffendersModule } from './offenders/offenders.module';
import { PrisonModule } from './prison/prison.module';
import { PrisonWardModule } from './prison-ward/prison-ward.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/Smart-Society-System'),
    BaseEntityModule,
    CauseOfCrimeModule,
    CorrectionCentersModule,
    CourtChargeModule,
    CrimeOffendersModule,
    CrimesModule,
    OffencesModule,
    OffendersModule,
    PrisonModule,
    PrisonWardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
