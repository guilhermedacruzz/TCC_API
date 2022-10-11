import { Body, Controller, Get, HttpCode, HttpStatus, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/users.model';
import { UsersService } from './users.service';
import { Res } from './models/res.model';

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
    public async signin(@Body() signinDto: SigninDto): Promise<Res> {
        return this.usersService.signin(signinDto);
    }

    @Get()  
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.OK)
    public async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Patch('update')
    update(@Body() updateUserDto: UpdateUserDto) {
        this.usersService.update(updateUserDto);
    }

}
