import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BaseEntiyController } from './base-entity.controller';
import { BaseEntityService } from './base-entity.service';
import { BaseEntity, BaseEntitySchema } from './schema/schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BaseEntity.name, schema: BaseEntitySchema },
    ]),
  ],
  controllers: [BaseEntiyController],
  providers: [BaseEntityService],
})
export class BaseEntityModule {}
