import { Timestamp } from "mongodb";

/* eslint-disable prettier/prettier */
export class CreateCourtChargeDTO {
  chargeTime: Timestamp;
  crimeOffendersId: string;
  courtRulling: string;
  penalty: string;
  courtName: string;
  courtJudge: string;
  offenderLawyer: string;
}
