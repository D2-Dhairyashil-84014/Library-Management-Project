import { Field, ID, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "typeorm";
// import { BookCategory } from "../book.categoryType";

@ObjectType()
export class BookType extends BaseEntity {
    @Field(() => ID)
    id: number

    @Field(() => String)
    title: string

    @Field(() => String)
    author: string

    @Field(() => Number)
    stock: number

    @Field(() => String)
    category: string

}
