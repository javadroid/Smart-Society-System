import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCourtChargeDTO } from './DTO/CourtChargeDTO';
import { CourtCharge, CourtChargeDoc } from './schema/schema';
import { Model } from 'mongoose';

@Injectable()
export class CourtChargeService {
  constructor(
    @InjectModel(CourtCharge.name)
    private courtChargeModel: Model<CourtChargeDoc>,
  ) { }
  //Model to create a project... to be called in the controller
  async create(createDto: CreateCourtChargeDTO) {
    return await this.courtChargeModel.create(createDto);
  }

  //Model to update a project.. to be called in the controller
  async update(_id: string, updated: CreateCourtChargeDTO) {
    const check = this.courtChargeModel.findByIdAndUpdate({ _id }, updated);
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }
  //Model to find a project... to be called in the controller
  async findById(_Id: string) {
    const check = this.courtChargeModel.find({ _id: _Id }).exec();
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }

  //Model to find all project... to be called in the controller
  async findAll() {
    return this.courtChargeModel.find({}).exec();
  }

  //Model to delete a project... to be called in the controller
  async delete(_id) {
    const check = await this.courtChargeModel.findByIdAndRemove({
      _id: Object(_id),
    }).exec();
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }
}
