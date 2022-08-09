import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
  import { CourtChargeService } from './court-charge.service';
  import { CreateCourtChargeDTO } from './DTO/CourtChargeDTO';
  
  @Controller('courtcharge')
  export class CourtChargeController {
    constructor(private courtChargeService: CourtChargeService) { }
  
    @Post()
    async create(@Body() createDto: CreateCourtChargeDTO) {
      return this.courtChargeService.create(createDto);
    }
  
    @Patch(':_id')
    async update(
      @Param('_id') _Id: string,
      @Body() updated: CreateCourtChargeDTO,
    ) {
      return this.courtChargeService.update(_Id, updated);
    }
  
    @Get()
    async findAll() {
      return this.courtChargeService.findAll();
    }
  
    @Get(':_id')
    async findOne(@Param('_id') _id: string) {
      return this.courtChargeService.findById(_id);
    }
  
    @Delete(':_id')
    async delete(@Param('_id') _id: string) {
      return this.courtChargeService.delete(_id);
    }
  }
  