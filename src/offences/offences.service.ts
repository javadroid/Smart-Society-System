import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOffencesDTO } from './DTO/OffencesDTO';
import { Offences, OffencesDoc } from './schema/schema';
import { Model } from 'mongoose';

@Injectable()
export class OffencesService {
    constructor(
        @InjectModel(Offences.name)
        private OffencesModel: Model<OffencesDoc>,
    ) { }
    //Model to create a project... to be called in the controller
    async create(createDto: CreateOffencesDTO) {
        return await this.OffencesModel.create(createDto);
    }

    //Model to update a project.. to be called in the controller
    async update(_id: string, updated: CreateOffencesDTO) {
        const check = this.OffencesModel.findByIdAndUpdate({ _id }, updated);
        if (!check) {
            throw new NotFoundException('project not found');
        }
        return check;
    }
    //Model to find a project... to be called in the controller
    async findById(_Id: string) {
        const check = this.OffencesModel.find({ _id: _Id }).exec();
        if (!check) {
            throw new NotFoundException('project not found');
        }
        return check;
    }

    //Model to find all project... to be called in the controller
    async findAll() {
        return this.OffencesModel.find({}).exec();
    }

    //Model to delete a project... to be called in the controller
    async delete(_id) {
        const check = await this.OffencesModel.findByIdAndRemove({
            _id: Object(_id),
        }).exec();
        if (!check) {
            throw new NotFoundException('project not found');
        }
        return check;
    }
}
