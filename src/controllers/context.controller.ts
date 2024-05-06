import {
    deleteContext,
    getContext, getContextsToGame,
    getContextsToCharacter, saveContext
} from "../repositories/context";
import {Context} from "../models/context";
import {getCharacter} from "../repositories/character";
import {DeleteResult} from "typeorm";
import { getDialogues } from "../repositories/dialogue";
import {Dialogue} from "../models/dialogue";

export default class ContextController {

    public async getContexts(gameId: string): Promise<Array<Context>> {
        return getContextsToGame(gameId);
    }

    public async getContextsOfCharacter(characterId: string): Promise<Array<Context>> {
        return getContextsToCharacter(characterId);
    }


    public async getDialogues(contextId: number): Promise<Array<Dialogue>> {
        return getDialogues(contextId);
    }

    public async createContext(characterId: number, req: any): Promise<Context | null | undefined> {
        const ch = await getCharacter(characterId);

        return Promise.resolve(ch).then(function (character) {
            if (!character) return null;
            const context = new Context();
            context.name = req.name;
            context.prompt = req.prompt;
            context.dialogues = req.dialogues;
            context.character = character;
            context.game = character.game;
            return saveContext(context);
        }, function (e) {
            return e;
        });
    }

    public async updateContext(id: number, req: any): Promise<Context | null | undefined> {
        const c = getContext(id);

        return Promise.resolve(c).then(function (context) {
            if (!context) return null;
            context.name = req.name;
            context.prompt = req.prompt;
            context.dialogues = req.dialogues;
            context.character = req.character;
            context.game = req.game;
            return saveContext(context);
        }, function (e) {
            return e;
        });
    }

    public async deleteContext(id: number): Promise<DeleteResult> {
        return deleteContext(id);
    }


}
