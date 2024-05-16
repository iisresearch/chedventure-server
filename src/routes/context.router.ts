import express from "express";
import ContextController from "../controllers/context.controller";

const router = express.Router();

// TODO: remove if not needed
// router.get("/", async (_req, res) => {
//     try {
//         // @ts-ignore
//         const userId = _req.user.uid;
//
//         const controller = new ContextController();
//         const response = await controller.getContexts(userId);
//         return res.send(response);
//     } catch (err: any) {
//         console.log(err);
//         if (err?.code === "22P02") {
//             return res.status(404).send({message: "Context not found"})
//         } else {
//             return res.status(400).send({message: "Unexpected error. Please try again"})
//         }
//     }
// });

router.get("/game/:id", async (req, res) => {
    try {
        const controller = new ContextController();
        const response = await controller.getContexts(req.params.id);
        return res.send(response);
    } catch (err: any) {
        if (err?.code === "22P02") {
            return res.status(404).send({message: "Contexts not found"})
        } else {
            return res.status(400).send({message: "Unexpected error. Please try again"})
        }
    }
});

router.get("/character/:id", async (req, res) => {
    try {
        const controller = new ContextController();
        const response = await controller.getContextsOfCharacter(req.params.id);
        return res.send(response);
    } catch (err: any) {
        if (err?.code === "22P02") {
            return res.status(404).send({message: "Contexts not found"})
        } else {
            return res.status(400).send({message: "Unexpected error. Please try again"})
        }
    }
});

router.post("/character/:id", async (req, res) => {
    try {
        //const userId = req.user.uid;

        const controller = new ContextController();
        const response = await controller.createContext(Number(req.params.id), req.body);
        return res.send(response);
    } catch {
        return res.status(400).send({message: "Unexpected error. Please try again"})
    }
})

router.put("/:id", async (req, res) => {
    try {
        const controller = new ContextController();
        const response = await controller.updateContext(Number(req.params.id), req.body);
        return res.send(response);
    } catch {
        return res.status(400).send({message: "Unexpected error. Please try again"})
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const controller = new ContextController();
        const response = await controller.deleteContext(Number(req.params.id));
        return res.send(response);
    } catch {
        return res.status(400).send({message: "Unexpected error. Please try again"})
    }
})

export default router;
