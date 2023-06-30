import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './entities/book.entity';
import { BookResolver } from './book.resolver';
import { JwtStrategy } from 'apps/app1/src/auth/jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  providers: [BookService, BookResolver, JwtStrategy],
  exports: [BookService, BookResolver],
})
export class BookModule { }
