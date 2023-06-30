import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignupInputType } from './types/signup.input.type';
import { LibrarianEntity } from './entities/librarian.entity';
import { SigninInputType } from './types/signin.input.type';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LibrarianService {
    constructor(private jwtService: JwtService) { }

    async signup(input: SignupInputType){
        const {name,email,password}= input
        const user = new LibrarianEntity()
        user.name = name;
        user.email=email;
        user.password = password;
        await user.save();
        return user;
    }

    async signin(input: SigninInputType){
        const {email,password}= input
        const user = await LibrarianEntity.findOneBy({email, password})
        if(!user){
            throw new UnauthorizedException('your account does not exist');

        }
        const payload ={
            id: user.id,
            name: user.name,
        };

        //create token
        const token = this.jwtService.sign(payload);
        return {token};
    }

    async profile(id: number){
        const user = await LibrarianEntity.findOneBy({id})
        if(!user){
            throw new UnauthorizedException('your account does not exist');

        }
        return user;
    }
}
