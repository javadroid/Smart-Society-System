import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrimeOffendersController } from './crime-offenders.controller';
import { CrimeOffendersService } from './crime-offenders.service';
import { CrimeOffenders, CrimeOffendersSchema } from './schema/schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CrimeOffenders.name, schema: CrimeOffendersSchema },
    ]),
  ],
  controllers: [CrimeOffendersController],
  providers: [CrimeOffendersService],
})
export class CrimeOffendersModule { }
