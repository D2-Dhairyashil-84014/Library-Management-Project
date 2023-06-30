import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('borrowbook')
export class BorrowBookEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    studentId: number

    @Column()
    bookId: number

    @Column()
    issueDate: Date

    @Column({default:null})
    returnDate: Date

}

