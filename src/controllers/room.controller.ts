import {Room} from "../models/room";

import {
    getRoom,
    getRooms, saveRoom, deleteRoom,
} from "../repositories/room";
import {
    getRoomToGame,
    getRoomsToGame, saveRoomToGame, deleteRoomToGame,
} from "../repositories/roomToGame";
import {
    getHitbox,
} from "../repositories/hitbox";
import {
    getCharacter,
} from "../repositories/character";
import {RoomToGame} from "../models/roomToGame";
import {HitboxToRoomToGame} from "../models/hitboxToRoomToGame";
import {getGame, saveGame} from "../repositories/game";
import {DeleteResult} from "typeorm";
import {Hitbox} from "../models/hitbox";
import {Coordinate} from "../models/coordinate";

export default class RoomController {

    public async getRooms(userId: string): Promise<Array<Room>> {
        return getRooms(userId);
    }

    public async getRoomsInGame(gameId: string): Promise<Array<RoomToGame>> {
        return getRoomsToGame(gameId);
    }

    public async deleteRoom(userId: string, id: number): Promise<DeleteResult> {
        return deleteRoom(userId, id);
    }

    public async deleteRoomToGame(id: number): Promise<DeleteResult> {
        return deleteRoomToGame(id);
    }

    public async createNewRoom(userId: string, req: any): Promise<Room | null> {
        var room = new Room();
        room.name = req.name;
        room.image = Buffer.from(req.image, 'base64');
        room.createdByUserId = userId;

        const hitboxes: Hitbox[] = [];

        if (req.hitboxes && req.hitboxes.length !== 0) {
            for (const hTemp of req.hitboxes) {
                const hitbox = new Hitbox();
                const coordinates: Coordinate[] = [];

                for (const cTemp of hTemp.coordinates) {
                    const coordinate = new Coordinate();
                    coordinate.x = cTemp.x;
                    coordinate.y = cTemp.y;
                    coordinates.push(coordinate);
                }
                hitbox.coordinates = coordinates;
                hitboxes.push(hitbox);
            }
            room.hitboxes = hitboxes
        }
        return await saveRoom(room);
    }

    public async createRoomToGame(gameId: string, userId: string, req: any): Promise<RoomToGame | null | undefined> {
        const game = getGame(gameId, userId);
        const room = getRoom(req.room);

        return Promise.all([
            game.catch(error => { return null}),
            room.catch(error => { return null}),
        ]).then(([game, room]) => {
            var roomToGame = new RoomToGame();
            if (game) {
                roomToGame.game = game;
                if (!game.initialRoom) {
                    game.initialRoom = roomToGame;
                }
            }
            roomToGame.name = req.name;
            roomToGame.description = req.description;
            roomToGame.instructions = req.instructions;
            if (room) {
                roomToGame.room = room;
            }

            const hitboxesToRoomToGame: HitboxToRoomToGame[] = [];
            const promiseList = [];

            for (const hTemp of req.hitboxesToRoomToGame) {
                const h = new HitboxToRoomToGame();
                h.displayHitbox = hTemp.displayHitbox;
                h.blink = hTemp.blink;

                const hitbox = getHitbox(hTemp.hitbox);
                const targetRoom = getRoomToGame(hTemp.targetRoom);
                const targetCharacter = getCharacter(hTemp.targetCharacter);

                promiseList.push(Promise.all( [
                    hitbox.catch(error => { return null}),
                    targetRoom.catch(error => { return null}),
                    targetCharacter.catch(error => { return null}),
                ]).then(([hitbox, targetRoom, targetCharacter]) => {
                    console.log(hitbox, targetRoom, targetCharacter);
                    if (hitbox) {
                        h.hitbox = hitbox;
                    }
                    if (targetRoom) {
                        h.targetRoom = targetRoom;
                    }
                    if (targetCharacter) {
                        h.targetCharacter = targetCharacter;
                    }
                    hitboxesToRoomToGame.push(h);
                }));
            }

            return Promise.all(promiseList).then(() => {
                roomToGame!.hitboxesToRoomToGame = hitboxesToRoomToGame;
                return saveRoomToGame(roomToGame!)
            });
        })
    }

    public async updateRoomToGame(id:number, req: any): Promise<RoomToGame | null | undefined> {

        const original = getRoomToGame(id);
        const room = getRoom(req.room);

        return Promise.all([
            original.catch(error => { return null}),
            room.catch(error => { return null}),
        ]).then(([rtg, room]) => {
            var roomToGame = rtg;
            if (roomToGame) {
                roomToGame.name = req.name;
                roomToGame.description = req.description;
                if (room) {
                    roomToGame.room = room;
                }
                roomToGame.instructions = req.instructions;

                const hitboxesToRoomToGame: HitboxToRoomToGame[] = [];
                const promiseList = [];
                for (const hTemp of req.hitboxesToRoomToGame) {
                    const h = new HitboxToRoomToGame();
                    h.displayHitbox = hTemp.displayHitbox;
                    h.blink = hTemp.blink;

                    const hitbox = getHitbox(hTemp.hitbox);
                    const targetRoom = getRoomToGame(hTemp.targetRoom);
                    const targetCharacter = getCharacter(hTemp.targetCharacter);

                    promiseList.push(Promise.all( [
                        hitbox.catch(error => { return null}),
                        targetRoom.catch(error => { return null}),
                        targetCharacter.catch(error => { return null}),
                    ]).then(([hitbox, targetRoom, targetCharacter]) => {
                        console.log(hitbox, targetRoom, targetCharacter);
                        if (hitbox) {
                            h.hitbox = hitbox;
                        }
                        if (targetRoom) {
                            h.targetRoom = targetRoom;
                        }
                        if (targetCharacter) {
                            h.targetCharacter = targetCharacter;
                        }
                        hitboxesToRoomToGame.push(h);
                    }));
                }

                return Promise.all(promiseList).then(() => {
                    roomToGame!.hitboxesToRoomToGame = hitboxesToRoomToGame;
                    return saveRoomToGame(roomToGame!)
                    /*saveRoomToGame(roomToGame!).then(() => {
                        return roomToGame;
                    });*/
                });

            } else {
                return null
            }
        })
    }

}


/*
//const original = getRoomToGame(id)

Promise.resolve(original).then(function (roomToGame) {
    if(!roomToGame) return null;
    roomToGame.name = req.name;
    roomToGame.description = req.description;
    // TODO - Update to req.instructions
    //roomToGame.instructions = roomToGame.instructions;

    const room = getRoom(req.room);
    Promise.resolve(room).then(function (room) {
        if (room) {
            roomToGame.room = room
        } else { return null }
    })

    const hitboxesToRoomGame: HitboxToRoomToGame[] = [];
    for (const h of req.hitboxesToRoomToGame) {
        var hitboxToRoomToGame = new HitboxToRoomToGame();
        hitboxToRoomToGame.displayHitbox = h.displayHitbox;
        hitboxToRoomToGame.blink = h.blink;

        const hitbox = getHitbox(h.hitbox)
        Promise.resolve(hitbox).then(function (hitbox) {
            if (hitbox) {
                hitboxToRoomToGame.hitbox = hitbox;
            } else { return null }
        })
        const targetRoom = getRoomToGame(h.targetRoom);
        Promise.resolve(targetRoom).then(function (targetRoom) {
            if (targetRoom) {
                hitboxToRoomToGame.targetRoom = targetRoom;
            } else { return null }
        })
        const targetCharacter = getCharacter(h.targetCharacter);
        Promise.resolve(targetCharacter).then(function (targetCharacter) {
            if (targetCharacter) {
                hitboxToRoomToGame.targetCharacter = targetCharacter;
            } else { return null }
        })
        hitboxesToRoomGame.push(hitboxToRoomToGame);
    }
    roomToGame.hitboxesToRoomToGame = hitboxesToRoomGame;

    return saveRoomToGame(roomToGame);
}, function (e) {
    return null;
});
*/
