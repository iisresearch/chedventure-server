import {Room} from "../models/room";
import {AppDataSource} from "../data-source";
import {DeleteResult} from "typeorm";
import {RoomToGame} from "../models/roomToGame";

export const getRoom = async (id: number): Promise<Room | null> => {
    const room = await AppDataSource
        .getRepository(Room)
        .createQueryBuilder("room")
        .where("room.id = :id", { id: id})
        .getOne()
    return room;
}

export const getRooms = async (createdByUserId: string): Promise<Array<Room>> => {
    const roomRepository = await AppDataSource
        .getRepository(Room)
        .createQueryBuilder("room")
        .leftJoinAndSelect("room.hitboxes", "hitbox")
        .leftJoinAndSelect("hitbox.coordinates", "coordinate")
        .where("room.createdByUserId = :createdByUserId", { createdByUserId: createdByUserId })
        .orWhere("room.createdByUserId IS NULL")
        .getMany()
    return roomRepository;
}

export const deleteRoom = async (createdByUserId: string, id: number): Promise<DeleteResult> => {
    const room = await AppDataSource
        .createQueryBuilder()
        .delete()
        .from(Room)
        .where("id = :id", {id: id})
        .andWhere("createdByUserId = :createdByUserId", { createdByUserId: createdByUserId })
        .execute()
    return room
}

export const saveRoom = async (room: Room): Promise <Room | null> => {
    const roomRepository = AppDataSource.getRepository(Room);
    return await roomRepository.save(room);
}
