import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudentSigninResponseType {
  @Field()
  token: string;
}
