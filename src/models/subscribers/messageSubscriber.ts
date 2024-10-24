// src/subscribers/context.subscriber.ts
import {EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent, RemoveEvent} from "typeorm";
import {Message} from "../message";
import {saveCharacter} from "../../repositories/character";
import {Character} from "../character";

@EventSubscriber()
export class MessageSubscriber implements EntitySubscriberInterface<Message> {

    async afterInsert(event: InsertEvent<any>) {
        await this.updateCharacterLastUpdated(event.entity);
    }

    async afterUpdate(event: UpdateEvent<any>) {
        if (event.entity instanceof Message) {
            const message = event.entity;
            if (!message.character) {
                message.character = <Character> await event.manager
                    .createQueryBuilder()
                    .relation(Message, "character")
                    .of(message)
                    .loadOne();
            }
            await this.updateCharacterLastUpdated(message);
        }
    }
    // ContextSubscriber.ts handles already the removal
    // async afterRemove(event: RemoveEvent<any>) {
    //     let message = event.entity;
    //     message.intent = event.entityId;
    //     if (!message) {
    //         throw new Error("Message not found");
    //     }
    //     // Ensure the character relation is loaded
    //     if (!message.character) {
    //         await event.manager
    //             .createQueryBuilder()
    //             .relation(Message, "character")
    //             .of(message)
    //             .loadOne();
    //     }
    //
    //     await this.updateCharacterLastUpdated(message);
    // }

    private async updateCharacterLastUpdated(message: Message) {
        if (message.character) {
            message.character.lastUpdated = new Date();
            await saveCharacter(message.character);
        }
    }
}
