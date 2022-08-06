import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCauseOfCrimeDTO } from './DTO/CauseOfCrimeDTO';
import { CauseOfCrime, CauseOfCrimeDoc } from './schema/schema';
import { Model } from 'mongoose';

@Injectable()
export class CauseOfCrimeService {
  constructor(
    @InjectModel(CauseOfCrime.name)
    private CauseOfCrimeModel: Model<CauseOfCrimeDoc>,
  ) {}
  //Model to create a project... to be called in the controller
  async create(createDto: CreateCauseOfCrimeDTO) {
    return await this.CauseOfCrimeModel.create(createDto);
  }

  //Model to update a project.. to be called in the controller
  async update(_id: string, updated: CreateCauseOfCrimeDTO) {
    const check = this.CauseOfCrimeModel.findByIdAndUpdate({ _id }, updated);
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }
  //Model to find a project... to be called in the controller
  async findById(_Id: string) {
    const check = this.CauseOfCrimeModel.find({ _id: _Id }).exec();
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }

  //Model to find all project... to be called in the controller
  async findAll() {
    return this.CauseOfCrimeModel.find({}).exec();
  }

  //Model to delete a project... to be called in the controller
  async delete(_id) {
    const check = await this.CauseOfCrimeModel.findByIdAndRemove({
      _id: Object(_id),
    }).exec();
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }
}
