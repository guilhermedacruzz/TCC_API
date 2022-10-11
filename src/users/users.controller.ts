import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { User } from './models/users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    
    constructor(private readonly usersService: UsersService) {}

    @Post('signup')
    @HttpCode(HttpStatus.CREATED)
    public async signup(@Body() signupDto: SignupDto): Promise<User> {
        return this.usersService.signup(signupDto);
    }

    @Post('signin')
    @HttpCode(HttpStatus.OK)
    public async signin(@Body() signinDto: SigninDto): Promise<{ name: String; jwtToken: string; email: string; }> {
        return this.usersService.signin(signinDto);
    }
}
