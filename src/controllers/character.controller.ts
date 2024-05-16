import {
    deleteCharacter,
    getCharacter,
    getCharactersToGame, saveCharacter
} from "../repositories/character";
import {Character} from "../models/character";
import {getGame} from "../repositories/game";
import {DeleteResult} from "typeorm";
import {Context} from "../models/context";
import {saveContext} from "../repositories/context";

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
            character.history = req.history;
            character.chatbotUrl = req.chatbotUrl;
            character.contexts = [];
            // TODO:
            // character.context add Start Context to each new character by default
            // createContext();

            // Create default contexts for the new character
            const contextNames = ["Start", "Option", "End"];

            //Promise.resolve(contextNames).then((name)=> {

            for (let name of contextNames) {
                const context = new Context();
                context.character = character;
                context.name = name;
                context.game = character.game;
                context.messages = [];
                //let savedContext = saveContext(context);
                // if (savedContext!=null)
                character.contexts.push(context)
            }
            //});

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
            character.history = req.history;
            character.chatbotUrl = req.chatbotUrl;
            //character.contexts = req.contexts;
            return saveCharacter(character);
        }, function (e) {
            return e;
        });
    }

    public async deleteCharacter(id: number): Promise<DeleteResult> {
        return deleteCharacter(id);
    }


}
