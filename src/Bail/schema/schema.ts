/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type BailDoc = Bail & Document;

@Schema()
export class Bail {
  @Prop()
  crimeOffendersId: number;

  @Prop()
  bailDate: Date;

  @Prop()
  bailerName: string;

  @Prop()
  bailerPhoneNumber: Number;

  @Prop()
  bailerAdress: string;

  @Prop()
  bailerEmail: string;

  @Prop()
  bailBond: string;

}

export const BailSchema = SchemaFactory.createForClass(Bail);
