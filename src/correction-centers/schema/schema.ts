/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CorrectionCentersDoc = CorrectionCenters & Document;

@Schema()
export class CorrectionCenters {
  @Prop()
  name: string;
  @Prop()
  prisonType: string;
<<<<<<< HEAD

=======
>>>>>>> cda755570c0d2e4607ffbcb442444275b3b02046
}

export const CorrectionCentersSchema = SchemaFactory.createForClass(CorrectionCenters);