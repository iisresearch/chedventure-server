import express from "express";
import CharacterController from "../controllers/character.controller";
import RoomController from "../controllers/room.controller";


const router = express.Router();

router.get("/game/:id", async (req, res) => {
    try {
        const controller = new CharacterController();
        const response = await controller.getCharactersInGame(req.params.id);
        return res.send(response);
    }  catch (err: any) {
        if (err?.code === "22P02") {
            return res.status(404).send({message: "Character not found"})
        } else {
            return res.status(400).send({message: "Unexpected error. Please try again"})
        }
    }

});

router.post("/game/:id", async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user.uid;

        const controller = new CharacterController();
        const response = await controller.createCharacter(req.params.id, userId, req.body);
        return res.send(response);
    } catch {
        return res.status(400).send({message: "Unexpected error. Please try again"})
    }
})

router.put("/game/:id", async (req, res) => {
    try {
        const controller = new CharacterController();
        const response = await controller.updateCharacter(Number(req.params.id), req.body);
        return res.send(response);
    } catch {
        return res.status(400).send({message: "Unexpected error. Please try again"})
    }
})

router.delete("/game/:id", async (req, res) => {
    try {
        const controller = new CharacterController();
        const response = await controller.deleteCharacter(Number(req.params.id));
        return res.send(response);
    } catch {
        return res.status(400).send({message: "Unexpected error. Please try again"})
    }
})

export default router;
