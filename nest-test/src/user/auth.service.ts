import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { log, promisify } from 'util';
import { randomBytes, scrypt as _scrypt } from 'crypto';

const scrypt = promisify(_scrypt);
@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}
    // 注册
    async signUp(email: string, password: string) {
        const [user] = await this.userService.find(email);
        if (user) {
            throw new BadRequestException('Email is used');
        }

        const salt = randomBytes(8).toString('hex');
        const hash = (await scrypt(password, salt, 32)) as Buffer;

        const result = `${salt},${hash.toString('hex')}`;
        const newUser = this.userService.create(email, result);
        return newUser;
    }

    // 登录
    async signIn(email: string, password: string) {
        const [user] = await this.userService.find(email);
        if (!user) {
            throw new NotFoundException('No User');
        }

        const [salt, hashStored] = user.password.split(',');
        const hash = (await scrypt(password, salt, 32)) as Buffer;
        console.log(hash.toString('hex'), hashStored);
        if (hash.toString('hex') === hashStored) {
            return user;
        } else {
            throw new NotFoundException('Password error!');
        }
    }
}
