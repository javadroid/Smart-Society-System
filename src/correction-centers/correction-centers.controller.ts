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
import { CreateCorrectionCentersDTO } from './DTO/CorrectionCenterDTO';

@Controller('correctioncenters')
export class CorrectionCentersController {
  constructor(private correctionCenterService: CorrectionCentersService) { }

  @Post()
  async create(@Body() createDto: CreateCorrectionCentersDTO) {
    return this.correctionCenterService.create(createDto);
  }

  @Patch(':_id')
  async update(
    @Param('_id') _Id: string,
    @Body() updated: CreateCorrectionCentersDTO,
  ) {
    return this.correctionCenterService.update(_Id, updated);
  }

  @Get()
  async findAll() {
    return this.correctionCenterService.findAll();
  }

  @Get(':_id')
  async findOne(@Param('_id') _id: string) {
    return this.correctionCenterService.findById(_id);
  }

  @Delete(':_id')
  async delete(@Param('_id') _id: string) {
    return this.correctionCenterService.delete(_id);
  }
}
