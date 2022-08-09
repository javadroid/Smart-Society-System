/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type CrimesDoc = Crimes & Document;

@Schema()
export class Crimes {
  @Prop()
  crimeIdentificationNo: number;

  @Prop()
  crimeCategoryId: string;

  @Prop()
  crimeSubCategoryId: string;

  @Prop()
  crimeType: string;

  @Prop()
  crimeSubType: string;

  @Prop()
  crimeName: string;

}

export const CrimesSchema = SchemaFactory.createForClass(Crimes);
