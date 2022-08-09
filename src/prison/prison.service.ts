import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreatePrisonDTO } from './DTO/prison.dto';
import { Prisons, PrisonsDoc } from './schema/schema';

@Injectable()
export class PrisonService {
  constructor(
    @InjectModel(Prisons.name)
    private PrisonsModel: Model<PrisonsDoc>,
  ) {}
  //Model to create a project... to be called in the controller
  async create(createDto: CreatePrisonDTO) {
    return await this.PrisonsModel.create(createDto);
  }

  //Model to update a project.. to be called in the controller
  async update(_id: string, updated: CreatePrisonDTO) {
    const check = this.PrisonsModel.findByIdAndUpdate({ _id }, updated);
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }
  //Model to find a project... to be called in the controller
  async findById(_Id: string) {
    const check = this.PrisonsModel.find({ _id: _Id }).exec();
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }

  //Model to find all project... to be called in the controller
  async findAll() {
    return this.PrisonsModel.find({}).exec();
  }

  //Model to delete a project... to be called in the controller
  async delete(_id) {
    const check = await this.PrisonsModel.findByIdAndRemove({
      _id: Object(_id),
    }).exec();
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }
}
