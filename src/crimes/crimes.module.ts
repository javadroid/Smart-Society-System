import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrimesController } from './crimes.controller';
import { CrimesService } from './crimes.service';
import { Crimes, CrimesSchema } from './schema/schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Crimes.name, schema: CrimesSchema, },
        ]),
    ],
    controllers: [CrimesController],
    providers: [CrimesService],
})
export class CrimesModule { }
