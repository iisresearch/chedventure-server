import express from "express";
import PingController from "../controllers/ping";
import GameRouter from "./game.router";
import PlayRouter from "./play.router";
import DraftRouter from "./draft.router";
import RoomRouter from "./room.router";
import CharacterRouter from "./character.router";
import {oktaAuth} from "../auth";

const router = express.Router();

router.use("/games", oktaAuth, GameRouter);
router.use("/rooms", oktaAuth, RoomRouter);
router.use("/characters", oktaAuth, CharacterRouter)
router.use("/draft", oktaAuth, DraftRouter)
router.use("/play", PlayRouter);

export default router;
