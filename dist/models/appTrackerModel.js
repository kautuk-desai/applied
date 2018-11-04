"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.JobAplicationSchema = new Schema({
    hashId: {
        type: String,
        required: '',
        index: true
    },
    companyName: {
        type: String
    },
    position: {
        type: String
    },
    applicationURL: {
        type: String
    },
    applicationWebsite: {
        type: String
    },
    applicationStatus: {
        type: String,
        default: "Applied"
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    updated_date: {
        type: Date,
        default: Date.now
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
});
//# sourceMappingURL=appTrackerModel.js.map