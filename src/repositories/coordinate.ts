import {AppDataSource} from "../data-source";
import {Coordinate} from "../models/coordinate";

export const saveHitbox = async (coordinate: Coordinate): Promise<Coordinate | null> => {
    const coordinateRepository = AppDataSource.getRepository(Coordinate);
    return await coordinateRepository.save(coordinate);
}
