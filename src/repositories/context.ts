import {Context} from "../models/context";
import {AppDataSource} from "../data-source";
import {DeleteResult} from "typeorm";

export const getContext = async (id: number): Promise<Context | null> => {
    const contextRepository = await AppDataSource
        .getRepository(Context)
        .createQueryBuilder("context")
        .where("context.id = :id", {id: id})
        .getOne()
    return contextRepository;
}

export const getContextsToGame = async (id: string): Promise<Array<Context>> => {
    const contextRepository = await AppDataSource
        .getRepository(Context)
        .createQueryBuilder("context")
        .where("context.game.id = :id", {gameId: id})
        .orWhere("context.id IS NULL")
        .getMany()
    return contextRepository;
}

export const getContextsToCharacter = async (id: string): Promise<Array<Context>> => {
    const contextRepository = await AppDataSource
        .getRepository(Context)
        .createQueryBuilder("context")
        .where("context.character.id = :id", {id: id})
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
