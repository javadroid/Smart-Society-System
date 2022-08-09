import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OffendersController } from './offenders.controller';
import { Offenders, OffendersSchema } from './schema/schema';
import { OffendersService } from './offenders.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Offenders.name, schema: OffendersSchema },
    ]),
  ],
  controllers: [OffendersController],
  providers: [OffendersService],
})
export class OffendersModule {}
