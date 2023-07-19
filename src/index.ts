import "reflect-metadata";
import {createConnection, DataSource} from "typeorm";
import express, {Application} from "express";
import {oktaAuth} from "./auth";
import morgan from "morgan";
import Router from "./routes";
import {Game} from "./models/game";
import {
    saveGame
} from "./repositories/game";
import {AppDataSource} from "./data-source";
import GameRouter from "./routes/game.router";
import router from "./routes";

const PORT = process.env.PORT || 4201;

const cors = require('cors');
const bodyParser = require('body-parser');
const bearerToken = require('express-bearer-token');
const fileUpload = require('express-fileupload');

const app: Application = express();

app.use(cors())
//app.use(express.json());
app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({limit: '5mb', extended: true}));
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bearerToken());
app.use(Router);
app.use(fileUpload);


AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
        app.listen(PORT, () => {
            console.log("Server is running on port", PORT);
        });
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


