import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePrisonWardDTO } from './DTO/PrisonWardDTO';
import { PrisonWard, PrisonWardDoc } from './schema/schema';
import { Model } from 'mongoose';

@Injectable()
export class PrisonWardService {
  constructor(
    @InjectModel(PrisonWard.name)
    private PrisonWardModel: Model<PrisonWardDoc>,
  ) {}
  //Model to create a project... to be called in the controller
  async create(createDto: CreatePrisonWardDTO) {
    return await this.PrisonWardModel.create(createDto);
  }

  //Model to update a project.. to be called in the controller
  async update(_id: string, updated: CreatePrisonWardDTO) {
    const check = this.PrisonWardModel.findByIdAndUpdate({ _id }, updated);
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }
  //Model to find a project... to be called in the controller
  async findById(_Id: string) {
    const check = this.PrisonWardModel.find({ _id: _Id }).exec();
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }

  //Model to find all project... to be called in the controller
  async findAll() {
    return this.PrisonWardModel.find({}).exec();
  }

  //Model to delete a project... to be called in the controller
  async delete(_id) {
    const check = await this.PrisonWardModel.findByIdAndRemove({
      _id: Object(_id),
    }).exec();
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }
}
