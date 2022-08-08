/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Timestamp } from "mongodb";

export type CrimeOffendersDoc = CrimeOffenders & Document;

@Schema()
export class CrimeOffenders {
  @Prop()
  offenderIdentificationNo: number;

  @Prop()
  offenceId: string;

  @Prop()
  crimeId: string;

  @Prop()
  agentId: string;

  @Prop()
  agencyId: string;

  @Prop()
  policyId: string;

  @Prop()
  statementOfOffence: string;

  @Prop()
  crimeScenePictures: string;

  @Prop()
  crimeSceneRecording: string;

  @Prop()
  crimeLocationId: string;

  @Prop()
  eyeWitnessReport: string;

  @Prop()
  incidentId: string;

  @Prop()
  incidentTimeCode: string;

  @Prop()
  incidentTimeStamp: Timestamp;

  @Prop()
  fineChargesPaid: string;

  @Prop()
  incidentDependencies: string;

  @Prop()
  crimeDate: Date;

  @Prop()
  causesId: string;

  @Prop()
  status: string;

  @Prop()
  crimeChargedTypeId: string;

  @Prop()
  nextCourtAppearanceDate: Date;
}

export const CrimeOffendersSchema = SchemaFactory.createForClass(CrimeOffenders);
