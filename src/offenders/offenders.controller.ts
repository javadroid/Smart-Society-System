import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOffendersDTO } from './DTO/offenders.dto';
import { OffendersService } from './offenders.service';

@Controller('offenders')
export class OffendersController {
  constructor(private causeOfCrimeService: OffendersService) {}

  @Post()
  async create(@Body() createDto: CreateOffendersDTO) {
    return this.causeOfCrimeService.create(createDto);
  }

  @Patch(':_id')
  async update(@Param('_id') _Id: string, @Body() updated: CreateOffendersDTO) {
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
