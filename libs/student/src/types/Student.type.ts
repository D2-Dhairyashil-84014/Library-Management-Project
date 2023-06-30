import { Field, ID, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "typeorm";


@ObjectType()
export class StudentType extends BaseEntity{
    @Field(()=>ID)
    studentId:number

    @Field()
    name:string
    
    @Field()
    email:string
}