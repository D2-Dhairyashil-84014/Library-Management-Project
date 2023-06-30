import { BookEntity } from "book/book/entities/book.entity"
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity('librarian')
export class LibrarianEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string

    @Column()
    email:string

    @Column()
    password:string

  //   @OneToMany(() => BookEntity, (book) => book.librarian)
  // books! : BookEntity[];
}