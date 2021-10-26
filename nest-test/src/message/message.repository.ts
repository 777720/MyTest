import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageRepository {
    async findOne(id: string) {
        const content = await readFile('message.json', 'utf8');
        const messages = JSON.parse(content);
        return messages[id];
    }

    async findAll() {
        const content = await readFile('message.json', 'utf8');
        const message = JSON.parse(content);

        return message;
    }

    async create(message: string) {
        const contents = await readFile('message.json', 'utf8');
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content: message };
        await writeFile('message.json', JSON.stringify(messages), 'utf8');
    }
}
