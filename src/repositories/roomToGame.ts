import {RoomToGame} from "../models/roomToGame";
import {AppDataSource} from "../data-source";
import {Room} from "../models/room";
import {DeleteResult} from "typeorm";


export const getRoomToGame = async (id: number): Promise<RoomToGame | null> => {
    const roomToGame = await AppDataSource
        .getRepository(RoomToGame)
        .createQueryBuilder("roomToGame")
        .where("roomToGame.id = :id", { id: id})
        .getOne();
    return roomToGame;
}

export const getRoomToGameWithJoins = async (id: number): Promise<RoomToGame | null> => {
    const roomToGame = await AppDataSource
        .getRepository(RoomToGame)
        .createQueryBuilder("roomToGame")
        .leftJoinAndSelect("roomToGame.hitboxesToRoomToGame", "hitboxesToRoomsToGame")
        .leftJoin("roomToGame.room", "room")
        .addSelect(["room.id"])
        .leftJoinAndSelect("hitboxesToRoomsToGame.targetRoom", "targetRoom")
        .leftJoinAndSelect("hitboxesToRoomsToGame.targetCharacter", "targetCharacter")
        .leftJoinAndSelect("hitboxesToRoomsToGame.hitbox", "hitbox")
        .leftJoinAndSelect("hitbox.coordinates", "coordinates")
        .where("roomToGame.id = :id", { id: id})
        .getOne();
    return roomToGame;
}

export const getRoomsToGame = async (id: string): Promise<Array<RoomToGame>> => {
    const roomToGameRepository = await AppDataSource
        .getRepository(RoomToGame)
        .createQueryBuilder("roomToGame")
        .leftJoinAndSelect("roomToGame.hitboxesToRoomToGame", "hitboxesToRoomsToGame")
        .leftJoin("roomToGame.room", "room")
        .addSelect(["room.id"])
        .leftJoinAndSelect("hitboxesToRoomsToGame.targetRoom", "targetRoom")
        .leftJoinAndSelect("hitboxesToRoomsToGame.targetCharacter", "targetCharacter")
        .leftJoinAndSelect("hitboxesToRoomsToGame.hitbox", "hitbox")
        .leftJoinAndSelect("hitbox.coordinates", "coordinates")
        .where("roomToGame.game.id = :id", { id: id })
        .getMany();
    return roomToGameRepository
}

export const deleteRoomToGame = async (id: number): Promise<DeleteResult> => {
    const roomToGameRepository = await AppDataSource
        .createQueryBuilder()
        .delete()
        .from(RoomToGame)
        .where("id = :id", {id: id})
        .execute()
    return roomToGameRepository
}

export const saveRoomToGame = async (roomToGame: RoomToGame): Promise<RoomToGame | null> => {
    const roomToGameRepository = AppDataSource.getRepository(RoomToGame);
    const rtg = await roomToGameRepository.save(roomToGame);
    return await getRoomToGameWithJoins(rtg.id);
}
