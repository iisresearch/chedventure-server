import {DeleteResult, getRepository, TypeORMError} from "typeorm";
import { Game} from "../models/game";
import {AppDataSource} from "../data-source";
import {RoomToGame} from "../models/roomToGame";

/*export interface IGamePayload {
    name: string;
    description: string;
}*/

export const getGames = async (userId: string): Promise<Array<Game>> => {
    //const gameRepository = AppDataSource.getRepository(Game);
    const games = await AppDataSource
        .getRepository(Game)
        .createQueryBuilder("game")
        .where("game.userId = :userId", {userId: userId})
        .getMany()
    return games;
}

export const getGame = async (id: string, userId: string): Promise<Game> => {

    const game = await AppDataSource
        .getRepository(Game)
        .createQueryBuilder("game")
        .leftJoin("game.initialRoom", "initialRoom")
        .addSelect(["initialRoom.id"])
        .where("game.id = :id", { id: id })
        .andWhere("game.userId = :userId", {userId: userId})
        .getOne();
    if (!game) {
        throw new TypeORMError()
    }
    return game;

}

export const getRoomsInGame = async (id: string): Promise<Array<RoomToGame> | null> => {
    const roomToGame = await AppDataSource
        .getRepository(RoomToGame)
        .createQueryBuilder("roomToGame")
        .where("game.id = :id", { id: id })
        .getMany()
    return roomToGame
}

export const playGame = async (id: string): Promise<Game | null> => {
    const gameToPlay = await AppDataSource
        .getRepository(Game)
        .createQueryBuilder("game")
        .leftJoin("game.initialRoom", "initialRoom")
        .addSelect(["initialRoom.id"])
        .leftJoinAndSelect("game.characters", "characters")
        .leftJoinAndSelect("game.roomToGames", "roomToGames")
        .leftJoinAndSelect("roomToGames.room", "room")
        .addSelect(["room.image"])
        .leftJoinAndSelect("roomToGames.hitboxesToRoomToGame", "hitboxesToRoomToGames")
        .leftJoinAndSelect("hitboxesToRoomToGames.targetRoom", "targetRoom")
        .leftJoinAndSelect("hitboxesToRoomToGames.targetCharacter", "targetCharacter")
        .leftJoinAndSelect("hitboxesToRoomToGames.hitbox", "hitbox")
        .leftJoinAndSelect("hitbox.coordinates", "coordinates")
        .where("game.id = :id", { id: id })
        .getOne()

    if (!gameToPlay) return null;
    return gameToPlay;
}

export const deleteGame = async (id: string): Promise<DeleteResult> => {
    const gameRepository = await AppDataSource
        .createQueryBuilder()
        .delete()
        .from(Game)
        .where("id = :id", {id: id})
        .execute()
    return gameRepository
}

export const updateGame = async (game: Game): Promise<Game | null> => {
    const gameRepository = AppDataSource.getRepository(Game);
    const g = await gameRepository.save(game);
    return await getGame(g.id, game.userId);
}

export const saveGame = async (game: Game): Promise<Game | null> => {
    const gameRepository = AppDataSource.getRepository(Game);
    await gameRepository.insert(game);
    return game
}

