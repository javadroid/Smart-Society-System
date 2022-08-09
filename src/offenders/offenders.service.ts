import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Offenders, OffendersDoc } from './schema/schema';
import { Model } from 'mongoose';
import { CreateOffendersDTO } from './DTO/offenders.dto';

@Injectable()
export class OffendersService {
  constructor(
    @InjectModel(Offenders.name)
    private OffendersModel: Model<OffendersDoc>,
  ) {}
  //Model to create a project... to be called in the controller
  async create(createDto: CreateOffendersDTO) {
    return await this.OffendersModel.create(createDto);
  }

  //Model to update a project.. to be called in the controller
  async update(_id: string, updated: CreateOffendersDTO) {
    const check = this.OffendersModel.findByIdAndUpdate({ _id }, updated);
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }
  //Model to find a project... to be called in the controller
  async findById(_Id: string) {
    const check = this.OffendersModel.find({ _id: _Id }).exec();
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }

  //Model to find all project... to be called in the controller
  async findAll() {
    return this.OffendersModel.find({}).exec();
  }

  //Model to delete a project... to be called in the controller
  async delete(_id) {
    const check = await this.OffendersModel.findByIdAndRemove({
      _id: Object(_id),
    }).exec();
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }
}
