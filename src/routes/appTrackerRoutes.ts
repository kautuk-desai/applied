import {Request, Response} from "express";


import { AppTrackerController } from "../controllers/appTrackerController";


export class Routes{
	public appTrackerController: AppTrackerController = new AppTrackerController();
	
	public routes(app): void {
		// check if already applied to this position
		app.route('/isapplied').get(this.appTrackerController.getApplication);

		// insert entry for applied position
		app.route('/insertApplied').post(this.appTrackerController.addNewApplication);
	}
}