"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const data_source_1 = require("./data-source");
const PORT = process.env.PORT || 4201;
const cors = require('cors');
const bodyParser = require('body-parser');
const bearerToken = require('express-bearer-token');
const fileUpload = require('express-fileupload');
const app = (0, express_1.default)();
app.use(cors());
//app.use(express.json());
app.use(express_1.default.json({ limit: '5mb' }));
app.use(express_1.default.urlencoded({ limit: '5mb', extended: true }));
app.use((0, morgan_1.default)("tiny"));
app.use(express_1.default.static("public"));
app.use(bodyParser.json());
app.use(bearerToken());
app.use(routes_1.default);
app.use(fileUpload);
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
    app.listen(PORT, () => {
        console.log("Server is running on port", PORT);
    });
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
