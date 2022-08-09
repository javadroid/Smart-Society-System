import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CauseOfCrimeController } from './cause-of-crime.controller';
import { CauseOfCrimeService } from './cause-of-crime.service';
import { CauseOfCrime, CauseOfCrimeSchema } from './schema/schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CauseOfCrime.name, schema: CauseOfCrimeSchema },
    ]),
  ],
  controllers: [CauseOfCrimeController],
  providers: [CauseOfCrimeService],
})
export class CauseOfCrimeModule { }
