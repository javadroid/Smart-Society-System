/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OffendersDoc = Offenders & Document;

@Schema()
export class Offenders {
  @Prop()
  offenderIdentificationNO: string;
  @Prop()
  offencesId:string;
  @Prop()
  offenderName:string;
  @Prop()
  offenderEmail:string;
  @Prop()
  offenderNextOfKin:string;
  @Prop()
  offenderDescription:string;
  @Prop()
  offenderAddress:string;
  @Prop()
  offenderStateOfOrigin:string;
  @Prop()
  offenderCountry:string;
  @Prop()
  offenderBiometrics:string;
  @Prop()
  offenderPicture:string;
  @Prop()
  offenderLga:string;
  @Prop()
  offenderDateOfBirth:string;
  @Prop()
  offenderGender:string;
  @Prop()
  offenderType:string;

}

export const OffendersSchema = SchemaFactory.createForClass(Offenders);
