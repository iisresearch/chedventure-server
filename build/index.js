"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const auth_1 = require("./auth");
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const database_1 = __importDefault(require("./config/database"));
const PORT = process.env.PORT || 4201;
const cors = require('cors');
const bodyParser = require('body-parser');
const bearerToken = require('express-bearer-token');
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("tiny"));
app.use(express_1.default.static("public"));
app.use(bodyParser.json());
app.use(bearerToken());
app.use(auth_1.oktaAuth);
app.use(routes_1.default);
(0, typeorm_1.createConnection)(database_1.default)
    .then((_connection) => {
    app.listen(PORT, () => {
        console.log("Server is running on port", PORT);
    });
})
    .catch((err) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
});
