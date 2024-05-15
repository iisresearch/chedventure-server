import {Message} from "../models/message";
import {AppDataSource} from "../data-source";
import {DeleteResult} from "typeorm";

export const getMessage = async (id: number): Promise<Message | null> => {
    const messageRepository = await AppDataSource
        .getRepository(Message)
        .createQueryBuilder("message")
        .where("message.id = :id", {id: id})
        .getOne()
    return messageRepository;
}

export const getMessagesToContext = async (contextId: number): Promise<Array<Message>> => {
    const messageRepository = await AppDataSource
        .getRepository(Message)
        .createQueryBuilder("message")
        .where("message.contextId = :contextId", {contextId: contextId})
        //.orWhere("message.contextId IS NULL")
        .getMany()
    return messageRepository;
}

export const getMessagesToCharacter = async (id: string): Promise<Array<Message>> => {
    const messageRepository = await AppDataSource
        .getRepository(Message)
        .createQueryBuilder("message")
        .where("message.character.id = :id", {id: id})
        .getMany()
    return messageRepository;
}

export const deleteMessage = async (intent: number): Promise<DeleteResult> => {
    const messageRepository = await AppDataSource
        .createQueryBuilder()
        .delete()
        .from(Message)
        .where("intent = :intent", {intent: intent})
        .execute()
    return messageRepository;
}

export const saveMessage = async (message: Message): Promise<Message | null> => {
    const messageRepository = AppDataSource.getRepository(Message);
    const msg = await messageRepository.save(message)
    return await getMessage(msg.intent);
}

export const saveMessages = async (messages: Message[]): Promise<Array<Message>> => {
    const messageRepository = AppDataSource.getRepository(Message);
    const msgs = await messageRepository.save(messages)
    return await getMessagesToContext(msgs[0].context.id);
}