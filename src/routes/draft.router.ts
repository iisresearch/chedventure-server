import express from "express";
import GameController from "../controllers/game.controller";

const router = express.Router();

router.get("/:id", async (req, res) => {
    try {
        const controller = new GameController();
        const response = await controller.playGame(req.params.id);
        return res.send(response);
    } catch (err: any) {
        if (err?.code === "22P02") {
            return res.status(404).send({message: "Game not found"})
        } else {
            return res.status(400).send({message: "Unexpected error. Please try again"})
        }
    }
});

export default router;
