// import { BookCategory } from './../book.categoryType';
import { LibrarianEntity } from "@librarian/librarian/entities/librarian.entity"
import { StudentEntity } from "student/student/entities/student.entity"
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('book')
export class BookEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  author: string

  @Column()
  stock: number

  @Column()
  BookCategory: string


  // @ManyToOne(
  //   type => LibrarianEntity, librarian => librarian.books)
  // librarian!: LibrarianEntity;

  // @ManyToOne(() => StudentEntity, (student) => student.books)
  // student: StudentEntity;
}

