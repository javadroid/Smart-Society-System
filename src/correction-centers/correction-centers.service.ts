import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCorrectionCentersDTO } from './DTO/CorrectionCenterDTO';
import { CorrectionCenters, CorrectionCentersDoc } from './schema/schema';
import { Model } from 'mongoose';

@Injectable()
export class CorrectionCentersService {
  constructor(
    @InjectModel(CorrectionCenters.name)
    private correctionCentersModel: Model<CorrectionCentersDoc>,
  ) { }
  //Model to create a project... to be called in the controller
  async create(createDto: CreateCorrectionCentersDTO) {
    return await this.correctionCentersModel.create(createDto);
  }

  //Model to update a project.. to be called in the controller
  async update(_id: string, updated: CreateCorrectionCentersDTO) {
    const check = this.correctionCentersModel.findByIdAndUpdate({ _id }, updated);
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }
  //Model to find a project... to be called in the controller
  async findById(_Id: string) {
    const check = this.correctionCentersModel.find({ _id: _Id }).exec();
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }

  //Model to find all project... to be called in the controller
  async findAll() {
    return this.correctionCentersModel.find({}).exec();
  }

  //Model to delete a project... to be called in the controller
  async delete(_id) {
    const check = await this.correctionCentersModel.findByIdAndRemove({
      _id: Object(_id),
    }).exec();
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }
}
