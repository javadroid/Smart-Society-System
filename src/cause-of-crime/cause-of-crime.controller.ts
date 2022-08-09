import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CauseOfCrimeService } from './cause-of-crime.service';
import { CreateCauseOfCrimeDTO } from './DTO/CauseOfCrimeDTO';

@Controller('causeofcrime')
export class CauseOfCrimeController {
  constructor(private causeOfCrimeService: CauseOfCrimeService) { }

  @Post()
  async create(@Body() createDto: CreateCauseOfCrimeDTO) {
    return this.causeOfCrimeService.create(createDto);
  }

  @Patch(':_id')
  async update(
    @Param('_id') _Id: string,
    @Body() updated: CreateCauseOfCrimeDTO,
  ) {
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
