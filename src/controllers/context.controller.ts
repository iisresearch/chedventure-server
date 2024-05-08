import {
    deleteContext,
    getContext, getContextsToGame,
    getContextsToCharacter, saveContext
} from "../repositories/context";
import {Context} from "../models/context";
import {getCharacter} from "../repositories/character";
import {DeleteResult} from "typeorm";
import { getMessages } from "../repositories/message";
import {Message} from "../models/message";

export default class ContextController {

    public async getContexts(gameId: string): Promise<Array<Context>> {
        return getContextsToGame(gameId);
    }

    public async getContextsOfCharacter(characterId: string): Promise<Array<Context>> {
        return getContextsToCharacter(characterId);
    }


    public async getMessages(contextId: number): Promise<Array<Message>> {
        return getMessages(contextId);
    }

    public async createContext(characterId: number, req: any): Promise<Context | null | undefined> {
        const ch = await getCharacter(characterId);

        return Promise.resolve(ch).then(function (character) {
            if (!character) return null;
            const context = new Context();
            context.name = req.name;
            context.prompt = req.prompt;
            context.character = character;
            context.game = character.game;

            const messages: Message[] = [];
            for (let messageData of req.messages) {
                let message = new Message();
                message = messageData

                messages.push(message);
            }
            context.messages = messages;

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
            context.messages = req.messages;
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
