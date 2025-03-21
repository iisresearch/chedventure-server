import {DataSource} from "typeorm";
import "reflect-metadata";
import {Game} from "./models/game";
import {Room} from "./models/room";
import {Hitbox} from "./models/hitbox";
import {Coordinate} from "./models/coordinate";
import {Character} from "./models/character";
import {RoomToGame} from "./models/roomToGame";
import {HitboxToRoomToGame} from "./models/hitboxToRoomToGame";
import {Context} from "./models/context";
import {Message} from "./models/message";
import {ContextSubscriber} from "./models/subscribers/contextSubscriber";
import {MessageSubscriber} from "./models/subscribers/messageSubscriber";
import dotenv from 'dotenv';

require('dotenv').config();
dotenv.config({ path: 'src/.env' });
console.log("DB: ", process.env.DATABASE_URL);

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    // host: process.env.POSTGRES_HOST || "localhost",
    // port: Number(process.env.POSTGRES_PORT) || 5432,
    // username: process.env.POSTGRES_USER || "test",
    // password: process.env.POSTGRES_PASSWORD || "test",
    // database: process.env.POSTGRES_DB || "test",
    entities: [Game, Room, Hitbox, Coordinate, Character, Context, Message, RoomToGame, HitboxToRoomToGame],
    subscribers: [ContextSubscriber, MessageSubscriber],
    migrations: ["src/migration/*.ts"],
    migrationsTableName: 'migrations',
    synchronize: true,
    ssl: {
        rejectUnauthorized: false
    },
});




// ts-node ./node_modules/typeorm/cli.js migration:run -d="src/data-source.ts"
