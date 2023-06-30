import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class StudentSigninInputType{

    @Field()
    email: string

    @Field()
    password: string
}