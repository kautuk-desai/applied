"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const appTrackerRoutes_1 = require("./routes/appTrackerRoutes");
class App {
    constructor() {
        this.appRoutes = new appTrackerRoutes_1.Routes();
        this.mongoURL = "mongodb://server:server123@ds151293.mlab.com:51293/applied";
        this.app = express();
        this.config();
        this.appRoutes.routes(this.app);
        this.mongoSetup();
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoURL, { useNewUrlParser: true });
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map