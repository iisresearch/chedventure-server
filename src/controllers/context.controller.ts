import {
    deleteContext,
    getContext, getContextsToGame,
    getContextsToCharacter, saveContext
} from "../repositories/context";
import {Context} from "../models/context";
import {getCharacter} from "../repositories/character";
import {DeleteResult} from "typeorm";
import {getMessagesToContext} from "../repositories/message";
import {Message} from "../models/message";

export default class ContextController {

    public async getContexts(gameId: string): Promise<Array<Context>> {
        return getContextsToGame(gameId);
    }

    public async getContextsOfCharacter(characterId: string): Promise<Array<Context>> {
        return getContextsToCharacter(characterId);
    }


    public async getMessages(contextId: number): Promise<Array<Message>> {
        return getMessagesToContext(contextId);
    }

    public async createContext(characterId: number, req: any): Promise<Context | null | undefined> {
        const ch = await getCharacter(characterId);

        return Promise.resolve(ch).then(function (character) {
            if (!character) throw new Error('Character not found');
            const context = new Context();
            context.name = req.name;
            context.character = character;
            context.game = character.game;

            // Sort messages by intent
            const sortedMessages = req.messages.sort((a: Message, b: Message) => a.intent - b.intent);

            context.messages = sortedMessages.map((messageData: Message, index: number) => {
                let message = new Message();
                message.character = context.character;
                message.continuation = index < sortedMessages.length - 1 ? sortedMessages[index + 1].intent.toString() : '';
                message = messageData;
                return message;
            });

            return saveContext(context);
        }, function (e) {
            return e;
        });
    }

    public async updateContext(id: number, req: any): Promise<Context | null | undefined> {
        const c = getContext(id);

        return Promise.resolve(c).then(async function (context) {
            if (!context) throw new Error('Context not found');
            context.name = req.name;
            //context.prompt = req.prompt;
            //context.game = req.game;
            const existingMessages = await getMessagesToContext(context.id);
            context.messages = req.messages.map((messageData: Message, index: number) => {
                let message = existingMessages.find(msg => msg.intent === messageData.intent);

                if (message) {
                    // Use the spread operator to copy properties from messageData to message
                    message = { ...message, ...messageData,
                        character: context.character,
                        continuation: index < req.messages.length - 1 ? req.messages[index + 1].intent.toString() : '',
                    };
                    console.log("message: ", message)
                } else {
                    // If the message doesn't exist, create a new one
                    message = new Message();
                    message.continuation = index < req.messages.length - 1 ? req.messages[index + 1].intent.toString() : '';
                    message.contextualisation = messageData.contextualisation;
                    message.utterance = messageData.utterance;
                    message.response = messageData.response;
                    message.character = context.character;

                    //message = { ...message, ...messageData };
                }
                return message;
            });

            return saveContext(context);
        }, function (e) {
            return e;
        });
    }

    public async deleteContext(id: number): Promise<DeleteResult> {
        return deleteContext(id);
    }

}
