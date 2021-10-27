import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
    create(email: string, password: string) {
        const user = this.userRepo.create({ email, password });
        return this.userRepo.save(user);
    }

    findOne(id: number) {
        if (!id) {
            return null;
        }
        const user = this.userRepo.findOne(id);
        return user;
    }

    find(email) {
        return this.userRepo.find({ email });
    }

    async update(id: number, attr: Partial<User>) {
        const user = await this.findOne(id);
        if (!user) {
            throw new Error('no user!');
        }
        Object.assign(user, attr);
        return this.userRepo.save(user);
    }

    async remove(id: number) {
        const user = await this.findOne(id);
        if (!user) {
            throw new Error('no user!');
        }
        return this.userRepo.remove(user);
    }
}
