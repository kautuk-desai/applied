"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appTrackerController_1 = require("../controllers/appTrackerController");
class Routes {
    constructor() {
        this.appTrackerController = new appTrackerController_1.AppTrackerController();
    }
    routes(app) {
        app.route('/').get(this.appTrackerController.getRoot);
        // check if already applied to this position
        app.route('/isapplied').get(this.appTrackerController.getApplication);
        // insert entry for applied position
        app.route('/insertApplied').post(this.appTrackerController.addNewApplication);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=appTrackerRoutes.js.map