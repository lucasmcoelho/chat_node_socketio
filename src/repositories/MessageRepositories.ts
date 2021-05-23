import Message from "./../models/Message";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Message)
class MessageRepositories extends Repository<Message> {}

export { MessageRepositories };
