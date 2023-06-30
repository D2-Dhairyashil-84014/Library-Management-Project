import { Module } from '@nestjs/common';
import { LibrarianService } from './librarian.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibrarianEntity } from './entities/librarian.entity';
import { LibrarianResolver } from './librarian.resolver';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../../../apps/app1/src/auth/jwt.strategy';
import { JwtAuthGuard } from 'apps/app1/src/auth/jwt.auth.guard';
import constant from 'apps/app1/src/auth/constant';

@Module({
  imports: [TypeOrmModule.forFeature([LibrarianEntity]), PassportModule,
  JwtModule.register({
    secret: constant.secret,
    signOptions: { expiresIn: '3600s' },
  })],
  providers: [LibrarianService, LibrarianResolver, JwtAuthGuard, JwtStrategy],
  exports: [LibrarianService, JwtStrategy, PassportModule, JwtAuthGuard],
})
export class LibrarianModule { }
