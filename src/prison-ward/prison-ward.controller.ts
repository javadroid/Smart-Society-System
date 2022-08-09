import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PrisonWardService } from './prison-ward.service';
import { CreatePrisonWardDTO } from './DTO/PrisonWardDTO';

@Controller('prisonward')
export class PrisonWardController {
  constructor(private prisonWardService: PrisonWardService) { }

  @Post()
  async create(@Body() createDto: CreatePrisonWardDTO) {
    return this.prisonWardService.create(createDto);
  }

  @Patch(':_id')
  async update(
    @Param('_id') _Id: string,
    @Body() updated: CreatePrisonWardDTO,
  ) {
    return this.prisonWardService.update(_Id, updated);
  }

  @Get()
  async findAll() {
    return this.prisonWardService.findAll();
  }

  @Get(':_id')
  async findOne(@Param('_id') _id: string) {
    return this.prisonWardService.findById(_id);
  }

  @Delete(':_id')
  async delete(@Param('_id') _id: string) {
    return this.prisonWardService.delete(_id);
  }
}
