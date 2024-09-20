import {Context} from "../models/context";
import {AppDataSource} from "../data-source";
import {DeleteResult} from "typeorm";
import {Room} from "../models/room";
import {Message} from "../models/message";
import {saveMessages} from "./message";

export const getContext = async (id: number): Promise<Context | null> => {
    const contextRepository = await AppDataSource
        .getRepository(Context)
        .createQueryBuilder("context")
        .where("context.id = :id", {id: id})
        .leftJoinAndSelect("context.messages", "messages")
        .leftJoinAndSelect("context.character", "character")
        .getOne()
    return contextRepository;
}

export const getContextsToGame = async (id: string): Promise<Array<Context>> => {
    const contextRepository = await AppDataSource
        .getRepository(Context)
        .createQueryBuilder("context")
        .where("context.game.id = :id", {id: id})
        .leftJoinAndSelect("context.messages", "messages")
        .leftJoinAndSelect("context.character", "character")
        .orderBy("context.id", "ASC")
        .getMany()
    return contextRepository;
}

export const getContextsToCharacter = async (id: string): Promise<Array<Context>> => {
    const contextRepository = await AppDataSource
        .getRepository(Context)
        .createQueryBuilder("context")
        .where("context.character.id = :id", {id: id})
        .leftJoinAndSelect("context.messages", "messages")
        .orderBy("context.id", "ASC")
        .orderBy("messages.intent", "ASC")
        .getMany()
    return contextRepository;
}

export const deleteContext = async (id: number): Promise<DeleteResult> => {
    const contextRepository = await AppDataSource
        .createQueryBuilder()
        .delete()
        .from(Context)
        .where("id = :id", {id: id})
        .execute()
    return contextRepository;
}

export const saveContext = async (context: Context): Promise<Context | null> => {
    const contextRepository = AppDataSource.getRepository(Context);
    // Ensure each message is properly instantiated and assigned the correct values
    context.messages = context.messages.map((messageData) => {
        const message = new Message();
        message.intent = messageData.intent;
        message.continuation = messageData.continuation;
        message.contextualisation = messageData.contextualisation;
        message.utterance = messageData.utterance;
        message.response = messageData.response;
        message.fallback = messageData.fallback;
        message.variable = messageData.variable;
        message.context = context;
        message.character = context.character;
        return message;
    });
    const messages = await saveMessages(context.messages);

    const co = await contextRepository.save(context)
    return await getContext(co.id);
}
