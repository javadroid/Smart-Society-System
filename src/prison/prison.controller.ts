import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePrisonDTO } from './DTO/prison.dto';
import { PrisonService } from './prison.service';

@Controller('prison')
export class PrisonController {
  constructor(private causeOfCrimeService: PrisonService) {}

  @Post()
  async create(@Body() createDto: CreatePrisonDTO) {
    return this.causeOfCrimeService.create(createDto);
  }

  @Patch(':_id')
  async update(@Param('_id') _Id: string, @Body() updated: CreatePrisonDTO) {
    return this.causeOfCrimeService.update(_Id, updated);
  }

  @Get()
  async findAll() {
    return this.causeOfCrimeService.findAll();
  }

  @Get(':_id')
  async findOne(@Param('_id') _id: string) {
    return this.causeOfCrimeService.findById(_id);
  }

  @Delete(':_id')
  async delete(@Param('_id') _id: string) {
    return this.causeOfCrimeService.delete(_id);
  }
}
