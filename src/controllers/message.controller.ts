import {deleteMessage, getMessage, saveMessage} from "../repositories/message";
import {Message} from "../models/message";

export default class MessageController {

    async updateMessage(intent: number, req: any): Promise<Message | null | undefined> {
        const m = getMessage(intent);

        console.log("MessageToUpdate: ", m)
        return Promise.resolve(m).then(async function (message) {
            if (!message) return null;
            message.contextualisation = req.contextualisation;
            message.utterance = req.utterance;
            message.response = req.response;

            return saveMessage(message);
        }, function (e) {
            return e;
        });
    }

    async deleteMessage(intent: number) {
        return deleteMessage(intent);
    }

}
