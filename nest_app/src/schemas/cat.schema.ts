/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop()
  imageUrl:string;
  
  
  @Prop()
  password:string;

}
export const CatSchema = SchemaFactory.createForClass(Cat)

CatSchema.set('toJSON', {
  transform: (doc, res) => {
    delete res.password;
    return res;
  }
});
