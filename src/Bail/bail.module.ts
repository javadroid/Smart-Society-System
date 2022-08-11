import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BailController } from './bail.controller';
import { BailService } from './bail.service';
import { Bail, BailSchema } from './schema/schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Bail.name, schema: BailSchema, },
        ]),
    ],
    controllers: [BailController],
    providers: [BailService],
})
export class BailModule { }
