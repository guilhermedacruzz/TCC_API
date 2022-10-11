import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/users.model';
import { Res } from './models/res.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User')
        private readonly usersModel: Model<User>,

        private readonly authService: AuthService,
    ){}

    public async signup(signupDto: SignupDto): Promise<User> {
        const haveOutherUser = await this.usersModel.findOne({ email: signupDto.email }); 
        if(haveOutherUser) {
            throw new BadRequestException('Email duplicate');
        }

        const newUser = new this.usersModel(signupDto);
        return newUser.save();
    }

    public async signin(signinDto: SigninDto): Promise<Res> {
        const user = await this.findByEmail(signinDto.email); 
        const match = await this.checkPassword(signinDto.password, user);

        if(!match) {
            throw new NotFoundException('Invalid credentials');
        }
        
        const jwtToken = await this.authService.createAccessToken(user._id);

        return { name: user.name, jwtToken, email: user.email };
    }

    public async update(updateUserDto: UpdateUserDto) {
        const user = await this.findByEmail(updateUserDto.email);

        const patch = await this.usersModel.findByIdAndUpdate(user.id, updateUserDto);

        if(!patch) {
            throw new NotFoundException();
        }
    }

    public async findAll(): Promise<User[]> {
        return this.usersModel.find();
    }

    private async findByEmail(email: string): Promise<User> {
        const user = await this.usersModel.findOne({ email })
        if(!user) {
            throw new NotFoundException('Email not found');
        }
        return user;
    }

    private async checkPassword(password: string, user: User): Promise<boolean> {
        const match = await bcrypt.compare(password, user.password);
        if(!match) {
            throw new NotFoundException('Password not found');
        }
        return match;
    }
}
