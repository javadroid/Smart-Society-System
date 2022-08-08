import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CorrectionCentersController } from './correction-centers.controller';
import { CorrectionCentersService } from './correction-centers.service';
import { CorrectionCenters, CorrectionCentersSchema } from './schema/schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CorrectionCenters.name, schema: CorrectionCentersSchema },
    ]),
  ],
  controllers: [CorrectionCentersController],
  providers: [CorrectionCentersService],
})
export class CorrectionCentersModule {}
