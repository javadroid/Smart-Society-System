/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type OffencesDoc = Offences & Document;

@Schema()
export class Offences {
  @Prop()
  offenceCode: number;

  @Prop()
  offenceCategory: string;

  @Prop()
  offenceSubCategory: string;

  @Prop()
  offenceName: string;

}

export const OffencesSchema = SchemaFactory.createForClass(Offences);
