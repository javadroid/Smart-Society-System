import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBailDTO } from './DTO/BailDTO';
import { Bail, BailDoc } from './schema/schema';
import { Model } from 'mongoose';

@Injectable()
export class BailService {
    constructor(
        @InjectModel(Bail.name)
        private BailModel: Model<BailDoc>,
    ) { }
    //Model to create a project... to be called in the controller
    async create(createDto: CreateBailDTO) {
        return await this.BailModel.create(createDto);
    }

    //Model to update a project.. to be called in the controller
    async update(_id: string, updated: CreateBailDTO) {
        const check = this.BailModel.findByIdAndUpdate({ _id }, updated);
        if (!check) {
            throw new NotFoundException('project not found');
        }
        return check;
    }
    //Model to find a project... to be called in the controller
    async findById(_Id: string) {
        const check = this.BailModel.find({ _id: _Id }).exec();
        if (!check) {
            throw new NotFoundException('project not found');
        }
        return check;
    }

    //Model to find all project... to be called in the controller
    async findAll() {
        return this.BailModel.find({}).exec();
    }

    //Model to delete a project... to be called in the controller
    async delete(_id) {
        const check = await this.BailModel.findByIdAndRemove({
            _id: Object(_id),
        }).exec();
        if (!check) {
            throw new NotFoundException('project not found');
        }
        return check;
    }
}
