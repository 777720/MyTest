import { MessageRepository } from './message.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
    constructor(public messageReposittory: MessageRepository) {}

    async findOne(id: string) {
        return this.messageReposittory.findOne(id);
    }

    async findAll() {
        return this.messageReposittory.findAll();
    }

    async create(content: string) {
        return this.messageReposittory.create(content);
    }
}
