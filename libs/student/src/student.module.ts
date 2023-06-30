import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entities/student.entity';
import { StudentResolver } from './student.resolver';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'apps/app1/src/auth/jwt.strategy';
import { BookService } from 'book/book';
import constant from 'apps/app1/src/auth/constant';
import { JwtAuthGuard } from 'apps/app1/src/auth/jwt.auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity]), PassportModule,
  JwtModule.register({
    secret: constant.secret,
    signOptions: { expiresIn: '3600s' },
  })],
  providers: [StudentService, StudentResolver, JwtAuthGuard, JwtStrategy, BookService],
  exports: [StudentService, JwtStrategy, PassportModule, JwtAuthGuard],
})
export class StudentModule {}
