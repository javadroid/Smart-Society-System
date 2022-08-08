import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { OffencesService } from './offences.service';
import { CreateOffencesDTO } from './DTO/OffencesDTO';

@Controller('offences')
export class OffencesController {
    constructor(private offencesService: OffencesService) { }

    @Post()
    async create(@Body() createDto: CreateOffencesDTO) {
        return this.offencesService.create(createDto);
    }

    @Patch(':_id')
    async update(
        @Param('_id') _Id: string,
        @Body() updated: CreateOffencesDTO,
    ) {
        return this.offencesService.update(_Id, updated);
    }

    @Get()
    async findAll() {
        return this.offencesService.findAll();
    }

    @Get(':_id')
    async findOne(@Param('_id') _id: string) {
        return this.offencesService.findById(_id);
    }

    @Delete(':_id')
    async delete(@Param('_id') _id: string) {
        return this.offencesService.delete(_id);
    }
}
