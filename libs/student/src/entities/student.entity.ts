import { BookEntity } from "book/book/entities/book.entity"
import { IsEmail, IsNotEmpty } from "class-validator"
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity('student')
export class StudentEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    studentId:number

    @Column()
    name: string
    
    @IsEmail()
    @Column({unique:true})
    email:string

    @IsNotEmpty()
    @Column()
    password:string

    // @OneToMany(() => BookEntity, (book) => book.student, { eager: false })
    // books: BookEntity[];
}