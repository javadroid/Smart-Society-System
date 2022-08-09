import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCrimeOffendersDTO } from './DTO/CrimeOffendersDTO';
import { CrimeOffenders, CrimeOffendersDoc } from './schema/schema';
import { Model } from 'mongoose';

@Injectable()
export class CrimeOffendersService {
  constructor(
    @InjectModel(CrimeOffenders.name)
    private CrimeOffendersModel: Model<CrimeOffendersDoc>,
  ) { }
  //Model to create a project... to be called in the controller
  async create(createDto: CreateCrimeOffendersDTO) {
    return await this.CrimeOffendersModel.create(createDto);
  }

  //Model to update a project.. to be called in the controller
  async update(_id: string, updated: CreateCrimeOffendersDTO) {
    const check = this.CrimeOffendersModel.findByIdAndUpdate({ _id }, updated);
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }
  //Model to find a project... to be called in the controller
  async findById(_Id: string) {
    const check = this.CrimeOffendersModel.find({ _id: _Id }).exec();
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }

  //Model to find all project... to be called in the controller
  async findAll() {
    return this.CrimeOffendersModel.find({}).exec();
  }

  //Model to delete a project... to be called in the controller
  async delete(_id) {
    const check = await this.CrimeOffendersModel.findByIdAndRemove({
      _id: Object(_id),
    }).exec();
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }
}
