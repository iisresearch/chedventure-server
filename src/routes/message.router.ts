import express from "express";
import MessageController from "../controllers/message.controller";

const router = express.Router();
const controller = new MessageController();

router.put("/:intent", async (req, res) => {
    try {
        const response = await controller.updateMessage(Number(req.params.intent), req.body);

        return res.send(response);
    } catch {
        return res.status(400).send({message: "Unexpected error. Please try again"})
    }
});

router.delete("/:intent", async (req, res) => {
    try {
        const response = await controller.removeMessage(Number(req.params.intent));

        return res.send(response);
    } catch {
        return res.status(400).send({message: "Unexpected error. Please try again"})
    }
});

export default router;
