import {Context} from "../models/context";
import {AppDataSource} from "../data-source";
import {DeleteResult} from "typeorm";
import {Room} from "../models/room";

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
        .getMany()
    return contextRepository;
}

export const getContextsToCharacter = async (id: string): Promise<Array<Context>> => {
    const contextRepository = await AppDataSource
        .getRepository(Context)
        .createQueryBuilder("context")
        .where("context.character.id = :id", {id: id})
        .leftJoinAndSelect("context.messages", "messages")
        .leftJoinAndSelect("context.character", "character")
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
    const co = await contextRepository.save(context)
    return await getContext(co.id);
}
