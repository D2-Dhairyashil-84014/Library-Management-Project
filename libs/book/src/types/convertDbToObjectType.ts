import { BookEntity } from "../entities/book.entity";
import { BookType } from "./book.type";


export function convertDbToObjectType(input: BookEntity): BookType {
  return {
    id: input.id,
    title: input.title,
    author: input.author,
    stock: input.stock,
    category: input.BookCategory,
  } as BookType;
}

