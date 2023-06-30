import { Injectable, UnauthorizedException } from '@nestjs/common';
import { StudentSignupInputType } from './types/signup.input.type';
import { StudentEntity } from './entities/student.entity';
import { StudentSigninInputType } from './types/signin.input.type';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class StudentService {
    constructor(private jwtService: JwtService) { }

    async signup(input: StudentSignupInputType){
        const {name,email,password}= input
        const user = new StudentEntity()
        user.name = name;
        user.email=email;
        user.password = password;
        await user.save();
        return user;
    }

    async signin(input: StudentSigninInputType){
        const {email,password}= input
        const user = await StudentEntity.findOneBy({email, password})
        if(!user){
            throw new UnauthorizedException('your account does not exist');

        }
        const payload ={
            id: user.studentId,
            name: user.name,
        };

        //create token
        const token = this.jwtService.sign(payload);
        return {token};
    }

    async profile(studentId: number){
        const user = await StudentEntity.findOneBy({studentId})
        if(!user){
            throw new UnauthorizedException('your account does not exist');

        }
        return user;
    }
    
}
