// src/subscribers/context.subscriber.ts
import {EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent, RemoveEvent} from "typeorm";
import {Context} from "../context";
import {saveCharacter} from "../../repositories/character";

@EventSubscriber()
export class ContextSubscriber implements EntitySubscriberInterface<Context> {

    async afterInsert(event: InsertEvent<any>) {
        await this.updateCharacterLastUpdated(event.entity);
    }

    async afterUpdate(event: UpdateEvent<any>) {
        if (event.entity instanceof Context) {
            await this.updateCharacterLastUpdated(event.entity);
        }
    }

    async afterRemove(event: RemoveEvent<any>) {
        let context = event.entity;
        context.id = event.entityId;
        if (!context) {
            throw new Error("Context not found");
        }
        // Ensure the character relation is loaded
        if (!context.character) {
            await event.manager
                .createQueryBuilder()
                .relation(Context, "character")
                .of(context)
                .loadOne();
        }

        await this.updateCharacterLastUpdated(context);
    }

    private async updateCharacterLastUpdated(context: Context) {
        if (context.character) {
            context.character.lastUpdated = new Date();
            await saveCharacter(context.character);
        }
    }
}
