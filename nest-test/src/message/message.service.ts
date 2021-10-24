import { MessageRepository } from './message.repository';

export class MessageService {
  messageReposittory: MessageRepository;

  constructor() {
    this.messageReposittory = new MessageRepository();
  }

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
