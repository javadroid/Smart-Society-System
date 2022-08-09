import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OffencesController } from './offences.controller';
import { OffencesService } from './offences.service';
import { Offences, OffencesSchema } from './schema/schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Offences.name, schema: OffencesSchema, },
        ]),
    ],
    controllers: [OffencesController],
    providers: [OffencesService],
})
export class OffencesModule { }
