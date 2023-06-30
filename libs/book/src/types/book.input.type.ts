import { title } from 'process';
import { Field, InputType } from "@nestjs/graphql"
import { StudentEntity } from 'student/student/entities/student.entity';
// import { BookCategory } from '../book.categoryType';

@InputType()
export class BookInputType {

    @Field()
    title: string

    @Field()
    author: string

    @Field()
    stock: number

    @Field()
    category: string;

}