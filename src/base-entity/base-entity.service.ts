import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBaseEntityDTO } from './DTO/BaseEntityDTO';
import { BaseEntity, BaseEntityDoc } from './schema/schema';
import { Model } from 'mongoose';

@Injectable()
export class BaseEntityService {
  constructor(
    @InjectModel(BaseEntity.name)
    private BaseEntityModel: Model<BaseEntityDoc>,
  ) {}
  //Model to create a project... to be called in the controller
  async create(createDto: CreateBaseEntityDTO) {
    return await this.BaseEntityModel.create(createDto);
  }

  //Model to update a project.. to be called in the controller
  async update(_id: string, updated: CreateBaseEntityDTO) {
    const check = this.BaseEntityModel.findByIdAndUpdate({ _id }, updated);
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }
  //Model to find a project... to be called in the controller
  async findById(_Id: string) {
    const check = this.BaseEntityModel.find({ _id: _Id }).exec();
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }

  //Model to find all project... to be called in the controller
  async findAll() {
    return this.BaseEntityModel.find({}).exec();
  }

  //Model to delete a project... to be called in the controller
  async delete(_id) {
    const check = await this.BaseEntityModel.findByIdAndRemove({
      _id: Object(_id),
    }).exec();
    if (!check) {
      throw new NotFoundException('project not found');
    }
    return check;
  }
}
