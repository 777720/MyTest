import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    Query,
    UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { SerializeInterceptor } from '../interceptor/serialize.interceptor';
import { UserDto } from './dto/user.dto';

@Controller('auth')
export class UserController {
    constructor(private userService: UserService) {}
    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
        this.userService.create(body.email, body.password);
    }

    @UseInterceptors(new SerializeInterceptor(UserDto))
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
