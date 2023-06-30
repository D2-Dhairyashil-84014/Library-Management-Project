import { BookType } from './types/book.type';
import { Injectable, NotFoundException } from '@nestjs/common';
import { BookEntity } from './entities/book.entity';
import { BookInputType } from './types/book.input.type';
import { LibrarianEntity } from '@librarian/librarian/entities/librarian.entity';
import { And, ILike, IsNull, Like, Not } from 'typeorm';
import { StudentEntity } from 'student/student/entities/student.entity';
import { convertDbToObjectType } from './types/convertDbToObjectType';
import { BookUpdate } from './types/bookUpdate.type';
import { BorrowBookEntity } from '@app/borrow-book/entities/borrowBook.entity';
import { IsEmpty, IsNotEmpty } from 'class-validator';


@Injectable()
export class BookService {

    //show all books
    async book(take: number, skip: number) {
        return await BookEntity.find(
            {
                take,
                skip,
            }
        )
    }

    //Available books
    async availableBooks() {
        return await BookEntity.find({
            where: {
                stock: Not(0)
            }
        })
    }

    //add new book to library
    async addNewBook(input: BookEntity) {
        const result = await BookEntity.save({ ...input });
        return convertDbToObjectType(result);
    }

    //update book details
    async updateBookDetails(id: number, input: BookEntity) {
        const book = await BookEntity.findOneBy({ id:id});
        if (!book) {
            return 'book not found';
        }
        book.title = input.title;
        book.author = input.author;
        book.BookCategory = input.BookCategory;
        book.stock=input.stock;
        await book.save();
        return book;
    }

    //available in stock or not by id
    async isAvailable(id: number) {
        const book = await BookEntity.findOneBy({ id });
        if (!book) {
            throw new NotFoundException('book not found');
        }
        if (book.stock > 0) {
            return book;
        } else {
            throw new NotFoundException('book is out of stock');
        }
    }

    //issue Book
    async issueBook(bookId: number, studentId: number) {
        const student = await StudentEntity.findOneBy({ studentId });
        const borrowBook = new  BorrowBookEntity();
        const borrowExist = await BorrowBookEntity.find({
            where:{
                bookId:bookId,
                studentId:studentId,
                returnDate:IsNull(),
            }
        }) 
        return borrowExist;
        
        if (!student) {
            return 'student not found';
        }
        const book = await BookEntity.findOneBy({ id:bookId })
        if (!book) {
            return 'book not found';
        }
        if (book.stock < 1) {
            return 'book is out of stock';
        }
        book.stock -= 1;
        borrowBook.bookId= bookId;
        borrowBook.studentId= studentId;
        borrowBook.issueDate= new Date();
        await borrowBook.save();
        await book.save();
        return 'book Issued';
    }

    //return Book
    async returnBook(id: number) {
        const book = await BookEntity.findOneBy({ id });
        if (book) {
            book.stock += 1;
            await book.save();
            return 'book returned successfully';
        }
        return 'book not found';
    }

    //Remove book
    async removeBook(id: number) {
        const book = await BookEntity.findOneBy({ id });
        if (book) {
            await book.remove();
            return "book removed"
        }
        return "does not exist"

    }

    //Search by title
    async searchBookbyTitle(input: string) {
        const book = await BookEntity.find({
            where: {
                title: ILike(`%${input}%`)
            }
        })
        if (!book) {
            return 'book not found';
        }
        return book;
    }

    //Search by author
    async searchBookbyAuthor(input: string) {
        const book = await BookEntity.find({
            where: {
                author: ILike(`%${input}%`)
            }
        })
        if (!book) {
            throw new NotFoundException('book not found');
        }
        return book;
    }

    async byCategory(BookCategory: string) {
        const book = await BookEntity.findBy({ BookCategory })
        if (!book) {
            throw new NotFoundException('book not exist')
        }
        return book;
    }

}
