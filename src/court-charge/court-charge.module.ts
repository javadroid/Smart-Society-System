import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourtChargeController } from './court-charge.controller';
import { CourtChargeService } from './court-charge.service';
import { CourtCharge, CourtChargeSchema } from './schema/schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CourtCharge.name, schema: CourtChargeSchema },
    ]),
  ],
  controllers: [CourtChargeController],
  providers: [CourtChargeService],
})
export class CourtChargeModule { }
