/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PrisonsDoc = Prisons & Document;

@Schema()
export class Prisons {
  @Prop()
  prisonName: string;
  @Prop()
  prisonLocation:string
  @Prop()
  prisonWardId:string
  @Prop()
  prisonAdmissionDate:string
  @Prop()
  prisonReleaseDate:string
  @Prop()
  bailBond:string

  
}

export const PrisonsSchema = SchemaFactory.createForClass(Prisons);
