import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CrimeOffendersService } from './crime-offenders.service';
import { CreateCrimeOffendersDTO } from './DTO/CrimeOffendersDTO';

@Controller('crimeOffenders')
export class CrimeOffendersController {
  constructor(private crimeOffendersService: CrimeOffendersService) { }

  @Post()
  async create(@Body() createDto: CreateCrimeOffendersDTO) {
    return this.crimeOffendersService.create(createDto);
  }

  @Patch(':_id')
  async update(
    @Param('_id') _Id: string,
    @Body() updated: CreateCrimeOffendersDTO,
  ) {
    return this.crimeOffendersService.update(_Id, updated);
  }

  @Get()
  async findAll() {
    return this.crimeOffendersService.findAll();
  }

  @Get(':_id')
  async findOne(@Param('_id') _id: string) {
    return this.crimeOffendersService.findById(_id);
  }

  @Delete(':_id')
  async delete(@Param('_id') _id: string) {
    return this.crimeOffendersService.delete(_id);
  }
}
