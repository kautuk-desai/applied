"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const appTrackerRoutes_1 = require("./routes/appTrackerRoutes");
class App {
    constructor() {
        this.appRoutes = new appTrackerRoutes_1.Routes();
        this.app = express();
        this.config();
        this.appRoutes.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map