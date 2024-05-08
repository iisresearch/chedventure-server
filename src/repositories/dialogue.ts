import {Message} from "../models/message";
import {AppDataSource} from "../data-source";
import {DeleteResult} from "typeorm";

export const getDialogue = async (id: number): Promise<Message | null> => {
    const dialogueRepository = await AppDataSource
        .getRepository(Message)
        .createQueryBuilder("dialogue")
        .where("dialogue.id = :id", {id: id})
        .getOne()
    return dialogueRepository;
}

export const getDialogues = async (contextId: number): Promise<Array<Message>> => {
    const dialogueRepository = await AppDataSource
        .getRepository(Message)
        .createQueryBuilder("dialogue")
        .where("dialogue.contextId = :createdByUserId", {contextId: contextId})
        .orWhere("dialogue.contextId IS NULL")
        .getMany()
    return dialogueRepository;
}

export const getDialoguesToCharacter = async (id: string): Promise<Array<Message>> => {
    const dialogueRepository = await AppDataSource
        .getRepository(Message)
        .createQueryBuilder("dialogue")
        .where("dialogue.character.id = :id", {id: id})
        .getMany()
    return dialogueRepository;
}

export const deleteDialogue = async (id: number): Promise<DeleteResult> => {
    const dialogueRepository = await AppDataSource
        .createQueryBuilder()
        .delete()
        .from(Message)
        .where("id = :id", {id: id})
        .execute()
    return dialogueRepository;
}

export const saveDialogue = async (dialogue: Message): Promise<Message | null> => {
    const dialogueRepository = AppDataSource.getRepository(Message);
    const di = await dialogueRepository.save(dialogue)
    return await getDialogue(di.intent);
}
