import { Module } from '@nestjs/common';
import { BorrowBookService } from './borrow-book.service';

@Module({
  providers: [BorrowBookService],
  exports: [BorrowBookService],
})
export class BorrowBookModule {}
