/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BaseEntityDoc = BaseEntity & Document;

@Schema()
export class BaseEntity {
  @Prop()
  createdById: string;

  @Prop()
  createdAt: Date;

  @Prop()
  modifyById: string;

  @Prop()
  modifiedAt: Date;
  
}

export const BaseEntitySchema = SchemaFactory.createForClass(BaseEntity);
