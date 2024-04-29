import {Hitbox} from "../models/hitbox";
import {AppDataSource} from "../data-source";

export const getHitbox = async (id: number): Promise<Hitbox | null> => {
    const hitbox = await AppDataSource
        .getRepository(Hitbox)
        .createQueryBuilder("hitbox")
        .where("hitbox.id = :id", {id: id})
        .getOne();
    return hitbox;
}

export const saveHitbox = async (hitbox: Hitbox): Promise<Hitbox | null> => {
    const hitboxRepository = AppDataSource.getRepository(Hitbox);
    return await hitboxRepository.save(hitbox);
}
