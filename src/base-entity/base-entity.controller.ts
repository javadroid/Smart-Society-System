import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
  import { BaseEntityService } from './base-entity.service';
  import { CreateBaseEntityDTO } from './DTO/BaseEntityDTO';
  
  @Controller('baseentity')
  export class BaseEntiyController {
    constructor(private baseEntityService: BaseEntityService) {}
  
    @Post()
    async create(@Body() createDto: CreateBaseEntityDTO) {
      return this.baseEntityService.create(createDto);
    }
  
    @Patch(':_id')
    async update(
      @Param('_id') _Id: string,
      @Body() updated: CreateBaseEntityDTO,
    ) {
      return this.baseEntityService.update(_Id, updated);
    }
  
    @Get()
    async findAll() {
      return this.baseEntityService.findAll();
    }
  
    @Get(':_id')
    async findOne(@Param('_id') _id: string) {
      return this.baseEntityService.findById(_id);
    }
  
    @Delete(':_id')
    async delete(@Param('_id') _id: string) {
      return this.baseEntityService.delete(_id);
    }
  }
  