
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './types/Student.type';
import { StudentService } from './student.service';
import { StudentSigninInputType } from './types/signin.input.type';
import { StudentSignupInputType } from './types/signup.input.type';
import { StudentSigninResponseType } from './types/signin.response.type';
import { UseGuards } from '@nestjs/common';
import { userInfo } from 'os';
import { StudentEntity } from './entities/student.entity';
import { JwtAuthGuard } from 'apps/app1/src/auth/jwt.auth.guard';
import { GetUser } from 'apps/app1/src/auth/get.user.decorator';

@Resolver(() => StudentType)
export class StudentResolver {
    constructor(private UserService: StudentService) { }

    @Mutation(() => StudentType)
    studentSignup(@Args('input') input: StudentSignupInputType) {
        return this.UserService.signup(input);
    }

    @Mutation(() => StudentSigninResponseType)
    studentSignin(@Args('input') input: StudentSigninInputType) {
        return this.UserService.signin(input);
    }


    // @Query(() => StudentType)
    // studentProfile(@Args('id') id: number) {
    //     return this.UserService.profile(id);
    // }
    @UseGuards(JwtAuthGuard)
    @Query(() => StudentType)
    studentProfile(@GetUser('user')user:StudentEntity) {
        return user;
    }
}
