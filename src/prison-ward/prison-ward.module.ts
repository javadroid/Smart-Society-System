import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrisonWardController } from './prison-ward.controller';
import { PrisonWardService } from './prison-ward.service';
import { PrisonWard, PrisonWardSchema } from './schema/schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PrisonWard.name, schema: PrisonWardSchema },
    ]),
  ],
  controllers: [PrisonWardController],
  providers: [PrisonWardService],
})
export class PrisonWardModule { }
