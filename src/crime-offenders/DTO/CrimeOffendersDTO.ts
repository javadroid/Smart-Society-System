import { Timestamp } from "mongodb";

/* eslint-disable prettier/prettier */
export class CreateCrimeOffendersDTO {
  offenderIdentificationNo: number;
  offenceId: string;
  crimeId: string;
  agentId: string;
  agencyId: string;
  policyId: string;
  statementOfOffence: string;
  crimeScenePictures: File;
  crimeSceneRecording: string;
  crimeLocationId: string;
  eyeWitnessReport: string;
  incidentId: string;
  incidentTimeCode: string;
  incidentTimeStamp: Timestamp;
  fineChargesPaid: string;
  incidentDependencies: string;
  crimeDate: Date;
  causesId: string;
  status: string;
  crimeChargedTypeId: string;
  nextCourtAppearanceDate: Date;
}
