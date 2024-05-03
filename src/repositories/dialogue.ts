import {Dialogue} from "../models/dialogue";
import {AppDataSource} from "../data-source";
import {DeleteResult} from "typeorm";

export const getDialogue = async (id: number): Promise<Dialogue | null> => {
    const dialogueRepository = await AppDataSource
        .getRepository(Dialogue)
        .createQueryBuilder("dialogue")
        .where("dialogue.id = :id", {id: id})
        .getOne()
    return dialogueRepository;
}

export const getDialogues = async (contextId: number): Promise<Array<Dialogue>> => {
    const dialogueRepository = await AppDataSource
        .getRepository(Dialogue)
        .createQueryBuilder("dialogue")
        .where("dialogue.contextId = :createdByUserId", {contextId: contextId})
        .orWhere("dialogue.contextId IS NULL")
        .getMany()
    return dialogueRepository;
}

export const getDialoguesToCharacter = async (id: string): Promise<Array<Dialogue>> => {
    const dialogueRepository = await AppDataSource
        .getRepository(Dialogue)
        .createQueryBuilder("dialogue")
        .where("dialogue.character.id = :id", {id: id})
        .getMany()
    return dialogueRepository;
}

export const deleteDialogue = async (id: number): Promise<DeleteResult> => {
    const dialogueRepository = await AppDataSource
        .createQueryBuilder()
        .delete()
        .from(Dialogue)
        .where("id = :id", {id: id})
        .execute()
    return dialogueRepository;
}

export const saveDialogue = async (dialogue: Dialogue): Promise<Dialogue | null> => {
    const dialogueRepository = AppDataSource.getRepository(Dialogue);
    const di = await dialogueRepository.save(dialogue)
    return await getDialogue(di.intent);
}
