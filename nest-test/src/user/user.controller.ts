import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    Query,
    Session,
    UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { SerializeInterceptor } from '../interceptor/serialize.interceptor';
import { UserDto } from './dto/user.dto';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorator/current-user.decorator';
import { User } from './user.entity';

@UseInterceptors(new SerializeInterceptor(UserDto))
@Controller('auth')
export class UserController {
    constructor(
        private userService: UserService,
        private authService: AuthService,
    ) {}

    @Post('/signup')
    async createUser(@Body() body: CreateUserDto, @Session() session: any) {
        const user = await this.authService.signUp(body.email, body.password);
        session.userId = user.id;
        return user;
    }

    @Get('/woami')
    getCurrentUser(@CurrentUser() user: User, @Session() session: any) {
        console.log(session);
        const currentUser = this.userService.findOne(session.userId);
        return currentUser;
    }

    @Get('/signout/:id')
    signOut(@Param('id') id: string, @Session() session: any) {
        session.userId = null;
    }
    @Post('/signin')
    async signIn(@Body() body: CreateUserDto, @Session() session: any) {
        const user = await this.authService.signIn(body.email, body.password);
        session.userId = user.id;
        return user;
    }

    @Get('/:id')
    findOneUser(@Param('id') id: string) {
        return this.userService.findOne(parseInt(id));
    }

    @Get()
    findAllUsers(@Query('email') email: string) {
        return this.userService.find(email);
    }

    @Patch('/: id')
    updateUser(@Param('id') id: string, @Body() body: CreateUserDto) {
        return this.userService.update(parseInt(id), body);
    }
}
