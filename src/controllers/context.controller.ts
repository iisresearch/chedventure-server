import {
  deleteContext,
  getContext, getContexts,
  getContextsToCharacter, saveContext
} from "../repositories/context";
import {Context} from "../models/context";
import {getCharacter} from "../repositories/character";
import {DeleteResult} from "typeorm";

export default class ContextController {

  public async getContexts(userId: string): Promise<Array<Context>> {
    return getContexts(userId);
  }

  public async getContextsOfCharacter(characterId: string): Promise<Array<Context>> {
    return getContextsToCharacter(characterId);
  }

  public async createContext(characterId: number, req: any): Promise<Context | null | undefined> {
    const ch = await getCharacter(characterId);

    return Promise.resolve(ch).then(function (character) {
      if (!character) return null;
      var context = new Context();
      context.character = character;
      context.name = req.name;
      context.prompt = req.prompt;
      context.response = req.response;
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
      context.response = req.response;
      return saveContext(context);
    }, function (e) {
      return e;
    });
  }

  public async deleteContext(id: number): Promise<DeleteResult> {
    return deleteContext(id);
  }


}
