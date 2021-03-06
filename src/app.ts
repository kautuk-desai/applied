import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

import { Routes } from "./routes/appTrackerRoutes";


class App{
	public app: express.Application;
	public appRoutes: Routes = new Routes();
	private mongoURL: string = "mongodb://server:server123@ds151293.mlab.com:51293/applied"

	constructor(){
		this.app = express();
		this.config();
		this.appRoutes.routes(this.app);
		this.mongoSetup();
	}

	private mongoSetup(): void {
		mongoose.Promise = global.Promise;
		mongoose.connect(this.mongoURL, {useNewUrlParser: true});
	}

	private config():void{
		this.app.use(bodyParser.json())
		this.app.use(bodyParser.urlencoded({extended: false}));
	}
}

export default new App().app;