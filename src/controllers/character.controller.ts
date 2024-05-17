import {deleteCharacter, getCharacter, getCharactersToGame, saveCharacter} from "../repositories/character";
import {Character} from "../models/character";
import {getGame} from "../repositories/game";
import {DeleteResult} from "typeorm";
import {Context} from "../models/context";

/**
 * CharacterController class handles all operations related to Characters.
 */
export default class CharacterController {

    /**
     * Retrieves the characters associated with a specified game.
     * @param {string} gameId - The ID of the game.
     * @return {Promise<Array<Character>>} - A Promise that resolves to an array of Character objects.
     */
    public async getCharactersInGame(gameId: string): Promise<Array<Character>> {
        return getCharactersToGame(gameId);
    }

    /**
     * Creates a new character for a specific game and user.
     * @param {string} gameId - The ID of the game.
     * @param {string} userId - The ID of the user.
     * @param {Object} req - The request object containing the character details.
     * @returns {Promise<Character | null | undefined>} A Promise that resolves with the created character, or null if the game is not found, or undefined if an error occurred.
     */
    public async createCharacter(gameId: string, userId: string, req: any): Promise<Character | null | undefined> {
        const g = getGame(gameId, userId);

        return Promise.resolve(g).then(function (game) {
            if (!game) return null;
            var character = new Character();
            character.game = game;
            character.name = req.name;
            character.title = req.title;
            character.description = req.description;
            character.history = req.history;
            character.chatbotUrl = req.chatbotUrl;
            character.contexts = [];

            CharacterController.fillDefaultContexts(character);

            return saveCharacter(character);

        }, function (e) {
            return e;
        });
    }
    /**
     * Fills the default contexts for a new character.
     * @param {Character} character - The character to fill the contexts for.
     */
    private static fillDefaultContexts(character: Character) {
        // Create default contexts for the new character
        const contextNames = ["Start", "Option", "End"];

        for (let name of contextNames) {
            const context = new Context();
            context.character = character;
            context.name = name;
            context.game = character.game;
            context.messages = [];
            character.contexts.push(context)
        }
    }

    /**
     * Updates a character.
     * @param {number} id - The ID of the character to update.
     * @param {any} req - The request object containing the new character details.
     * @returns {Promise<Character | null | undefined>} - A promise that resolves to the updated Character or null.
     */
    public async updateCharacter(id: number, req: any): Promise<Character | null | undefined> {
        const ch = getCharacter(id);

        return Promise.resolve(ch).then(function (character) {
            if (!character) return null;
            character.name = req.name;
            character.title = req.title;
            character.description = req.description;
            character.history = req.history;
            character.chatbotUrl = req.chatbotUrl;
            //character.contexts = req.contexts;
            return saveCharacter(character);
        }, function (e) {
            return e;
        });
    }

    /**
     * Deletes a character.
     * @param {number} id - The ID of the character to delete.
     * @returns {Promise<DeleteResult>} - A promise that resolves to the result of the delete operation.
     */
    public async deleteCharacter(id: number): Promise<DeleteResult> {
        return deleteCharacter(id);
    }


}
