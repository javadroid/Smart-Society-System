import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
  import { CorrectionCentersService } from './correction-centers.service';
  import {  CreateCorrectionCentersDTO } from './DTO/CorrectionCenterDTO';
  
  @Controller('correctioncenters')
  export class CorrectionCentersController {
    constructor(private CorrectionCenterService: CorrectionCentersService) {}
  
    @Post()
    async create(@Body() createDto: CreateCorrectionCentersDTO) {
      return this.CorrectionCenterService.create(createDto);
    }
  
    @Patch(':_id')
    async update(
      @Param('_id') _Id: string,
      @Body() updated: CreateCorrectionCentersDTO,
    ) {
      return this.CorrectionCenterService.update(_Id, updated);
    }
  
    @Get()
    async findAll() {
      return this.CorrectionCenterService.findAll();
    }
  
    @Get(':_id')
    async findOne(@Param('_id') _id: string) {
      return this.CorrectionCenterService.findById(_id);
    }
  
    @Delete(':_id')
    async delete(@Param('_id') _id: string) {
      return this.CorrectionCenterService.delete(_id);
    }
  }
  