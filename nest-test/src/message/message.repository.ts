import { readFile } from 'fs/promises';

export class MessageRepository {
  async findOne(id: string) {
    const content = await readFile('message.json', 'utf8');
    const messages = JSON.parse(content);
    return messages[id];
  }
}
