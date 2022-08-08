/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BaseEntityDoc = BaseEntity & Document;

@Schema()
export class BaseEntity {
  @Prop()
  createdById: string;
  static createdById: any;
}

export const BaseEntitySchema = SchemaFactory.createForClass(BaseEntity);
