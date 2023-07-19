import express from "express";
import {Game} from "../models/game";

import {
    getGames,
    //IGamePayload,
    getGame,
    getRoomsInGame,
    playGame,
    saveGame, updateGame, deleteGame,
} from "../repositories/game";
import {AppDataSource} from "../data-source";
import {RoomToGame} from "../models/roomToGame";
import {getRoom} from "../repositories/room";
import {getRoomToGame} from "../repositories/roomToGame";
import {DeleteResult} from "typeorm";

export default class GameController {

    public async getGames(userId: string): Promise<Array<Game>> {
        return getGames(userId);
    }

    public async getGame(id: string, userId: string): Promise<Game> {
        return getGame(id, userId);
    }

    public async getRoomsInGame(id: string): Promise<Array<RoomToGame> |null> {
        return getRoomsInGame(id);
    }

    public async deleteGame(id: string): Promise<DeleteResult> {
        return deleteGame(id);
    }

    public async playGame(id: string): Promise<Game | null> {
        return playGame(id);
    }


    public async updateGame(id: string, userId: string, req: any): Promise<Game | null> {
        const game = getGame(id, userId);

        if (req.initialRoom !== null) {
            const initialRoom = getRoomToGame(req.initialRoom.id);

            return Promise.all([
                game.catch(error => { return null}),
                initialRoom.catch(error => { return null}),
            ]).then(([game, initialRoom]) => {
                if (!game) return null;
                game.userId = userId;
                game.name = req.name;
                game.subtitle = req.subtitle;
                game.author = req.author
                game.version = req.version;
                game.updatedAt = new Date();
                game.documentation = req.documentation;
                game.isPublished = req.isPublished;
                if (initialRoom) {
                    game.initialRoom = initialRoom;
                }
                return updateGame(game);
            })
        } else {
            return Promise.resolve(game).then(function (game) {
                if (!game) return null;
                game.userId = userId;
                game.name = req.name;
                game.subtitle = req.subtitle;
                game.author = req.author
                game.version = req.version;
                game.updatedAt = new Date();
                game.initialRoom = game.initialRoom;
                game.documentation = req.documentation;
                game.isPublished = req.isPublished;
                return updateGame(game);
            }, function (e) {
                return e;
            });
        }

    }

    public async patchGame(id: string, userId: string, req: any): Promise<Game | null > {
        const game = getGame(id, userId);
        const room = getRoomToGame(req.initialRoom);

        return Promise.all([
            game.catch(error => { return null}),
            room.catch(error => { return null}),
        ]).then(([game, initialRoom]) => {
            if (!game) return null;
            game.documentation = req.documentation;
            if (initialRoom) {
                game.initialRoom = initialRoom;
            }
            return saveGame(game);
        })

    }


    public async createGame(req: any, userId: string,): Promise<Game | null> {
        var game = new Game();
        game.userId = userId;
        game.name = req.name;
        game.author = req.author
        game.version = req.version;
        if (req.subtitle != "") { game.subtitle = req.subtitle };
        game.createdAt = new Date();
        game.updatedAt = new Date();
        return await saveGame(game);
    }

}
