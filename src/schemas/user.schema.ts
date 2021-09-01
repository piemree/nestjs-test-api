import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  _id?: string;
  @Prop([String])
  name: string;
  @Prop([String])
  email: string;
  @Prop([String])
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
