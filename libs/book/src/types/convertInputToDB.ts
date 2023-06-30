import { BookEntity } from "../entities/book.entity";
import { BookInputType } from "./book.input.type";

export function convertInputToDb(input: BookInputType): BookEntity {
  return {
    title: input.title,
    author: input.author,
    stock: input.stock,
    BookCategory: input.category,
  } as BookEntity;
}

