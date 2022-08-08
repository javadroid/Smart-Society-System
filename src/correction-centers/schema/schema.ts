/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CorrectionCentersDoc = CorrectionCenters & Document;

@Schema()
export class CorrectionCenters {
  @Prop()
  name: string;
  @Prop()
  prisontype: string;

}

export const CorrectionCentersSchema = SchemaFactory.createForClass(CorrectionCenters);