import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from 'book/book/entities/book.entity';
import { BookModule } from 'book/book';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LibrarianModule } from '@librarian/librarian';
import { LibrarianEntity } from '@librarian/librarian/entities/librarian.entity';
import { StudentModule } from 'student/student';
import { StudentEntity } from 'student/student/entities/student.entity';
import { BorrowBookModule } from '@app/borrow-book';
import { BorrowBookEntity } from '@app/borrow-book/entities/borrowBook.entity';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'librarydb',
    entities: [BookEntity, LibrarianEntity, StudentEntity, BorrowBookEntity],
    synchronize: true,
  }),
    BookModule,
    LibrarianModule,
    StudentModule,
    BorrowBookModule,

  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground: true,
    autoSchemaFile: true
  }),
  ],
  controllers: [AppController],
  providers: [AppService,JwtStrategy],
})
export class AppModule { }
