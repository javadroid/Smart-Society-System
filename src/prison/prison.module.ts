import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrisonController } from './prison.controller';
import { PrisonService } from './prison.service';
import { Prisons, PrisonsSchema } from './schema/schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Prisons.name, schema: PrisonsSchema }]),
  ],
  controllers: [PrisonController],
  providers: [PrisonService],
})
export class PrisonModule {}
