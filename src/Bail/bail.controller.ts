import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BailService } from './bail.service';
import { CreateBailDTO } from './DTO/BailDTO';

@Controller('bail')
export class BailController {
    constructor(private bailService: BailService) { }

    @Post()
    async create(@Body() createDto: CreateBailDTO) {
        return this.bailService.create(createDto);
    }

    @Patch(':_id')
    async update(
        @Param('_id') _Id: string,
        @Body() updated: CreateBailDTO,
    ) {
        return this.bailService.update(_Id, updated);
    }

    @Get()
    async findAll() {
        return this.bailService.findAll();
    }

    @Get(':_id')
    async findOne(@Param('_id') _id: string) {
        return this.bailService.findById(_id);
    }

    @Delete(':_id')
    async delete(@Param('_id') _id: string) {
        return this.bailService.delete(_id);
    }
}
