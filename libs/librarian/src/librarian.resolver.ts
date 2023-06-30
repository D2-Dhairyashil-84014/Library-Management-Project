import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LibrarianType } from './types/Librarian.type';
import { LibrarianService } from './librarian.service';
import { SignupInputType } from './types/signup.input.type';
import { SigninInputType } from './types/signin.input.type';
import { SigninResponseType } from './types/signin.response.type';

@Resolver(() => LibrarianType)
export class LibrarianResolver {
    constructor(private UserService: LibrarianService){}

    @Mutation(() => LibrarianType)
    signup(@Args('input') input:SignupInputType){
        return this.UserService.signup(input);
    }

    @Mutation(() => SigninResponseType)
    signin(@Args('input') input:SigninInputType){
        return this.UserService.signin(input);
    }


    @Query(()=> LibrarianType)
    profile(@Args('id') id:number){
        return this.UserService.profile(id);
    }
}
