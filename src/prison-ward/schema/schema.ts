/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PrisonWardDoc = PrisonWard & Document;

@Schema()
export class PrisonWard {
  @Prop()

  name: string;

}

export const PrisonWardSchema = SchemaFactory.createForClass(PrisonWard);