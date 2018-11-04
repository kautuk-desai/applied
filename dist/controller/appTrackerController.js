"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const appTrackerModel_1 = require("../models/appTrackerModel");
const JobApplication = mongoose.model('JobApplication', appTrackerModel_1.JobAplicationSchema);
class AppTrackerController {
    generateHash(url) {
        // initialize hashid object with salt
        const hashid = new Hashids("applied_ub_hacking");
        const url_hex = new Buffer(url).toString('hex');
        return hashid.encodeHex(url_hex);
    }
    addNewApplication(req, res) {
        const hash = this.generateHash(req.body.url);
        const data = {
            applicationURL: req.body.url,
            hashId: hashid
        };
        const newApplication = new JobApplication(data);
        newApplication.save((err, application) => {
            if (err) {
                res.send(err);
            }
            res.send(application);
        });
    }
    getApplication(req, res) {
        const hash = this.generateHash(req.body.url);
        JobApplication.find({ hashId: hash }, (err, application) => {
            if (err) {
                res.send(err);
            }
            res.status(200).json(application);
        });
    }
}
exports.AppTrackerController = AppTrackerController;
//# sourceMappingURL=appTrackerController.js.map