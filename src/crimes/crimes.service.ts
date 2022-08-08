import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCrimesDTO } from './DTO/CrimesDTO';
import { Crimes, CrimesDoc } from './schema/schema';
import { Model } from 'mongoose';

@Injectable()
export class CrimesService {
    constructor(
        @InjectModel(Crimes.name)
        private CrimesModel: Model<CrimesDoc>,
    ) { }
    //Model to create a project... to be called in the controller
    async create(createDto: CreateCrimesDTO) {
        return await this.CrimesModel.create(createDto);
    }

    //Model to update a project.. to be called in the controller
    async update(_id: string, updated: CreateCrimesDTO) {
        const check = this.CrimesModel.findByIdAndUpdate({ _id }, updated);
        if (!check) {
            throw new NotFoundException('project not found');
        }
        return check;
    }
    //Model to find a project... to be called in the controller
    async findById(_Id: string) {
        const check = this.CrimesModel.find({ _id: _Id }).exec();
        if (!check) {
            throw new NotFoundException('project not found');
        }
        return check;
    }

    //Model to find all project... to be called in the controller
    async findAll() {
        return this.CrimesModel.find({}).exec();
    }

    //Model to delete a project... to be called in the controller
    async delete(_id) {
        const check = await this.CrimesModel.findByIdAndRemove({
            _id: Object(_id),
        }).exec();
        if (!check) {
            throw new NotFoundException('project not found');
        }
        return check;
    }
}
