"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routes {
    routes(app) {
        app.route('/isapplied').get((req, res) => {
            res.status(200).send({
                message: 'Checking if job is already applied'
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=appTrackerRoutes.js.map