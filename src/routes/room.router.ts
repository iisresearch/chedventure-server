import express from "express";
import RoomController from "../controllers/room.controller";
import GameController from "../controllers/game.controller";


const router = express.Router();

router.get("/", async (_req, res) => {
    try {
        // @ts-ignore
        const userId = _req.user.uid;

        const controller = new RoomController();
        const response = await controller.getRooms(userId);
        return res.send(response);
    } catch (err: any) {
        console.log(err);
        if (err?.code === "22P02") {
            return res.status(404).send({message: "Room not found"})
        } else {
            return res.status(400).send({message: "Unexpected error. Please try again"})
        }
    }

});

router.get("/game/:id", async (req, res) => {
    try {
        const controller = new RoomController();
        const response = await controller.getRoomsInGame(req.params.id);
        return res.send(response);
    } catch (err: any) {
        if (err?.code === "22P02") {
            return res.status(404).send({message: "Rooms not found"})
        } else {
            return res.status(400).send({message: "Unexpected error. Please try again"})
        }
    }
});

router.post("/game/:id", async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user.uid;

        const controller = new RoomController();
        const response = await controller.createRoomToGame(req.params.id, userId, req.body);
        return res.send(response);
    } catch(err) {
        console.log(err);
        return res.status(400).send({message: "Unexpected error. Please try again"})
    }
})

router.post("", async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user.uid;
        const controller = new RoomController();
        const response = await controller.createNewRoom(userId, req.body);
        return res.send(response);
    } catch(err) {
        console.log(err);
        return res.status(400).send({message: "Unexpected error. Please try again"})
    }
})

router.delete("/:id", async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user.uid;
        const controller = new RoomController();
        const response = await controller.deleteRoom(userId, Number(req.params.id));
        console.log(response);
        return res.send(response);
    } catch(err) {
        console.log(err)
        return res.status(400).send({message: "Unexpected error. Please try again"})
    }
})

router.put("/game/:id", async (req, res) => {
    try {
        const controller = new RoomController();
        const response = await controller.updateRoomToGame(Number(req.params.id), req.body);
        return res.send(response);
    } catch {
        return res.status(400).send({message: "Unexpected error. Please try again"})
    }
})

router.delete("/game/:id", async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.user.uid;
        const controller = new RoomController();
        const response = await controller.deleteRoomToGame(Number(req.params.id));
        return res.send(response);
    } catch {
        return res.status(400).send({message: "Unexpected error. Please try again"})
    }
})



export default router;
