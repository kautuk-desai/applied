"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const appTrackerModel_1 = require("../models/appTrackerModel");
const Hashids = require("hashids");
const JobApplication = mongoose.model('JobApplication', appTrackerModel_1.JobAplicationSchema);
const generateHash = function (url) {
    // initialize hashid object with salt
    const hashid = new Hashids("applied_ub_hacking");
    const url_hex = new Buffer(url).toString('hex');
    return hashid.encodeHex(url_hex);
};
class AppTrackerController {
    getRoot(req, res) {
        console.log("received request to root");
        res.status(200).send('Hello!');
    }
    addNewApplication(req, res) {
        console.log("received new application insert request...");
        const hash = generateHash(req.body.url);
        console.log(req.body.url);
        console.log(hash);
        const data = {
            applicationURL: req.body.url,
            hashId: hash
        };
        const newApplication = new JobApplication(data);
        newApplication.save((err, application) => {
            if (err) {
                res.send(err);
            }
            res.status(201).send(application);
        });
    }
    getApplication(req, res) {
        console.log("received check if already applied request...");
        const hash = generateHash(req.query.jobURL);
        console.log(req.query.jobURL);
        console.log(hash);
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