/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CauseOfCrimeDoc = CauseOfCrime & Document;

@Schema()
export class CauseOfCrime {
  @Prop()
  name: string;
}

export const CauseOfCrimeSchema = SchemaFactory.createForClass(CauseOfCrime);
