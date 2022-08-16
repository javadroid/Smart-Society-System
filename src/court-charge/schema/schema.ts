/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Timestamp } from "mongodb";


export type CourtChargeDoc = CourtCharge & Document;

@Schema()
export class CourtCharge {
    @Prop()
    chargeTime: Timestamp;

    @Prop()
    crimeOffendersId: string;

    @Prop()
    courtRulling: string;

    @Prop()
    penalty: string;

    @Prop()
    courtName: string;

    @Prop()
    courtJudge: string;

    @Prop()
    offenderLawyer: string;

}

export const CourtChargeSchema = SchemaFactory.createForClass(CourtCharge);
