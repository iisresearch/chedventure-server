import {Character} from "../models/character";
import {AppDataSource} from "../data-source";
import {DeleteResult} from "typeorm";

export const getCharacter = async (id: number): Promise<Character | null> => {
    const character = await AppDataSource
        .getRepository(Character)
        .createQueryBuilder("character")
        .leftJoinAndSelect("character.game", "game")
        .where("character.id = :id", { id: id})
        .getOne();
    return character;
}

export const getCharactersToGame = async (id: string): Promise<Array<Character>> => {
    const characterRepository = await AppDataSource
        .getRepository(Character)
        .createQueryBuilder("character")
        .leftJoinAndSelect("character.contexts", "context")
        .leftJoinAndSelect("context.messages", "messages")
        .where("character.game.id = :id", { id: id })
        .getMany();
    return characterRepository
}

export const deleteCharacter = async (id: number): Promise<DeleteResult> => {
    const characterRepository = await AppDataSource
        .createQueryBuilder()
        .delete()
        .from(Character)
        .where("id = :id", {id: id})
        .execute()
    return characterRepository
}

export const saveCharacter = async (character: Character): Promise <Character | null> => {
    const characterRepository = AppDataSource.getRepository(Character);
    const ch = await characterRepository.save(character)
    return await getCharacter(ch.id);
}
