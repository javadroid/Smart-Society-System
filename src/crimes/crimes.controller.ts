import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CrimesService } from './crimes.service';
import { CreateCrimesDTO } from './DTO/CrimesDTO';

@Controller('crimes')
export class CrimesController {
    constructor(private crimesService: CrimesService) { }

    @Post()
    async create(@Body() createDto: CreateCrimesDTO) {
        return this.crimesService.create(createDto);
    }

    @Patch(':_id')
    async update(
        @Param('_id') _Id: string,
        @Body() updated: CreateCrimesDTO,
    ) {
        return this.crimesService.update(_Id, updated);
    }

    @Get()
    async findAll() {
        return this.crimesService.findAll();
    }

    @Get(':_id')
    async findOne(@Param('_id') _id: string) {
        return this.crimesService.findById(_id);
    }

    @Delete(':_id')
    async delete(@Param('_id') _id: string) {
        return this.crimesService.delete(_id);
    }
}
