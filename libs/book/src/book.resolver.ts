
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { BookType } from "./types/book.type";
import { BookService } from "./book.service";
import { BookInputType } from "./types/book.input.type";
import { GetLibrarian } from "@librarian/librarian/get.librarian.decorator";
import { UseGuards, UseInterceptors } from "@nestjs/common";
import { LibrarianEntity } from "@librarian/librarian/entities/librarian.entity";
import { convertInputToDb } from "./types/convertInputToDB";
import { AppInterceptor } from "apps/app1/src/app.interceptor";
import { BookUpdate } from "./types/bookUpdate.type";
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "apps/app1/src/auth/jwt.auth.guard";
import { GetUser } from "apps/app1/src/auth/get.user.decorator";
import { StudentEntity } from "student/student/entities/student.entity";

// @UseInterceptors(AppInterceptor)
@Resolver(() => BookType)
export class BookResolver {
  constructor(private bookservice: BookService) { }


  //show all books
  @UseGuards(JwtAuthGuard)
  @Query(() => [BookType])
  book(
    @Args('take') take: number,
    @Args('skip') skip: number,
  ) {
    return this.bookservice.book(take, skip);
  }

  //Available books
  @Query(() => [BookType])
  availableBooks() {
    return this.bookservice.availableBooks();
  }

  //add new book to library
  // @UseGuards(JwtAuthGuard)
  @Mutation(() => BookType)
  addNewBook(
    // @GetLibrarian('librarian') librarian: LibrarianEntity,
    @Args('input') input: BookInputType) {
    const result = convertInputToDb(input);
    return this.bookservice.addNewBook(result);
  }


  //update book details
  @Mutation(() => BookType)
  updateBookDetails(
    @Args('id') id: number, @Args('input') input: BookUpdate) {
      const abc = convertInputToDb(input)
      return this.bookservice.updateBookDetails(id, abc);
    }

  // //available or not by id
  @Query(() => BookType)
  isAvailable(
    @Args('id') id: number) {
    return this.bookservice.isAvailable(id);
  }

  //issue Book
  @UseGuards(JwtAuthGuard)
  @Mutation(() => String)
  issueBook(
    @Args('id') id: number, @GetUser('user') user: StudentEntity) {
    return this.bookservice.issueBook(id, user.studentId);
  }

  // //return Book
  @Mutation(() => String)
  returnBook(
    @Args('id') id: number) {
    return this.bookservice.returnBook(id);
  }

  // //Remove book
  @Mutation(() => String)
  removeBook(
    @Args('id') id: number) {
    return this.bookservice.removeBook(id)
  }

  //Search by title
  @Query(() => [BookType])
  searchBookbyTitle(
    @Args('input') input: string
  ) {
    return this.bookservice.searchBookbyTitle(input);
  }

  //Search by author
  @Query(() => [BookType])
  searchBookbyAuthor(
    @Args('input') input: string
  ) {
    return this.bookservice.searchBookbyAuthor(input);
  }

  @Query(() => [BookType])
  byCategory(
    @Args('BookCategory') BookCategory: string
  ) {
    return this.bookservice.byCategory(BookCategory);
  }


}