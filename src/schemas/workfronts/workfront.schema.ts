import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
class Workfront {
 _id: number;
  @Prop()
  name: string;
  
  @Prop()
  role: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  status: string;
}

export type WorkfrontDocument = Workfront & mongoose.Document;

export const WorkfrontSchema = SchemaFactory.createForClass(Workfront);