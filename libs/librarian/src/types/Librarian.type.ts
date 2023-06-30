import { Field, ID, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "typeorm";


@ObjectType()
export class LibrarianType extends BaseEntity{
    @Field(()=>ID)
    id:number

    @Field()
    name:string
    
    @Field()
    email:string
}