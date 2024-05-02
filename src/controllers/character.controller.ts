

import {
    deleteCharacter,
    getCharacter,
    getCharactersToGame, saveCharacter
} from "../repositories/character";
import {Character} from "../models/character";
import {getGame} from "../repositories/game";
import {DeleteResult} from "typeorm";

export default class CharacterController {

    public async getCharactersInGame(gameId: string): Promise<Array<Character>> {
        return getCharactersToGame(gameId);
    }

    public async createCharacter(gameId: string, userId: string, req: any): Promise<Character | null | undefined> {
        const g = getGame(gameId, userId);

        return Promise.resolve(g).then(function (game) {
            if (!game) return null;
            var character = new Character();
            character.game = game;
            character.name = req.name;
            character.title = req.title;
            character.description = req.description;
            character.chatbotUrl = req.chatbotUrl;
            // TODO:
            // character.context add Start Context to each new character by default
            // createContext();
            return saveCharacter(character);
        }, function (e) {
            return e;
        });
    }

    public async updateCharacter(id: number, req: any): Promise<Character | null | undefined> {
        const ch = getCharacter(id);

        return Promise.resolve(ch).then(function (character) {
            if (!character) return null;
            character.name = req.name;
            character.title = req.title;
            character.description = req.description;
            character.chatbotUrl = req.chatbotUrl;
            return saveCharacter(character);
        }, function (e) {
            return e;
        });
    }

    public async deleteCharacter(id: number): Promise<DeleteResult> {
        return deleteCharacter(id);
    }


}
