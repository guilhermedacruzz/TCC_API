import { Body, Controller, Get, HttpCode, HttpStatus, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/users.model';
import { UsersService } from './users.service';
import { ResUsers } from './models/resUsers.model';

@Controller('users')
export class UsersController {
    
    constructor(private readonly usersService: UsersService) {}

    @Post('signup')
    @HttpCode(HttpStatus.CREATED)
    public async signup(@Body() signupDto: SignupDto): Promise<ResUsers> {
        return this.usersService.signup(signupDto);
    }

    @Post('signin')
    @HttpCode(HttpStatus.OK)
    public async signin(@Body() signinDto: SigninDto): Promise<ResUsers> {
        return this.usersService.signin(signinDto);
    }

    @Get()  
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.OK)
    public async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Patch('update')
    update(@Body() updateUserDto: UpdateUserDto) : Promise<{name: string, email: string}> {
        return this.usersService.update(updateUserDto);
    }

}
