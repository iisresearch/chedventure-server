import express from "express";
import GameController from "../controllers/game.controller";
import {Game} from "../models/game";
import RoomController from "../controllers/room.controller";

const router = express.Router();

// GET method route
router.get("/", async (_req, res, next) => {
    try {
        // @ts-ignore
        const userId = _req.user.uid;

        const controller = new GameController();
        const response = await controller.getGames(userId);
        return res.send(response);
    } catch (err: any) {
        console.log(err);
        if (err?.code === "22P02") {
            return res.status(404).send({message: "Game not found"})
        } else {
            return res.status(400).send({message: "Unexpected error. Please try again"})
        }
    }

});

router.get("/:id", async (req, res, next) => {
    try {
        // @ts-ignore
        const userId = req.user.uid;

        const controller = new GameController();
        const response = await controller.getGame(req.params.id, userId);
        return res.send(response);
    } catch (err: any) {
        if (err?.code === "22P02") {
            return res.status(404).send({message: "Game not found"})
        } else {
            return res.status(400).send({message: "Unexpected error. Please try again"})
        }
    }

});

router.put("/:id", async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user.uid;

        const controller = new GameController();
        const response = await controller.updateGame(req.params.id, userId, req.body);
        return res.send(response);
    } catch (err: any) {
        return res.status(400).send({message: "Unexpected error. Please try again"})
    }
});

router.patch("/:id", async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user.uid;

        const controller = new GameController();
        const response = await controller.patchGame(req.params.id, userId, req.body);
        return res.send(response);
    } catch (err: any) {
        return res.status(400).send({message: "Unexpected error. Please try again"})
    }
});

router.post("", async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user.uid;

        console.log(userId)

        const controller = new GameController();
        const response = await controller.createGame(req.body, userId);
        return res.send(response);
    } catch {
        return res.status(400).send({message: "Unexpected error. Please try again"})
    }

});

router.delete("/:id", async (req, res) => {
    try {
        const controller = new GameController();
        const response = await controller.deleteGame(req.params.id, );
        return res.send(response);
    } catch (err: any) {
        console.log(err);
        return res.status(400).send({message: "Unexpected error. Please try again"})
    }
})


export default router;
