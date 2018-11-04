import * as mongoose from "mongoose";
import { JobAplicationSchema } from "../models/appTrackerModel";
import { Request, Response } from "express";
import * as Hashids from "hashids";

const JobApplication = mongoose.model('JobApplication', JobAplicationSchema);

const generateHash = function(url){
		// initialize hashid object with salt
		const hashid = new Hashids("applied_ub_hacking");
		const url_hex = new Buffer(url).toString('hex');
		return hashid.encodeHex(url_hex);
}

export class AppTrackerController{

	public addNewApplication (req: Request, res: Response) {
		console.log("received new application insert request...");
		
		const hash = generateHash(req.body.url)
		console.log(req.body.url);
		console.log(hash);

		const data = {
			applicationURL: req.body.url,
			hashId: hash
		};

		const newApplication = new JobApplication(data);
	 
		newApplication.save((err, application) => {
			if(err){
				res.send(err);
			}

			res.status(201).send(application);
		});
	}

	public getApplication(req: Request, res: Response) {

		console.log("received check if already applied request...");
		const hash = generateHash(req.query.jobURL)
		console.log(req.query.jobURL)
		console.log(hash);
		JobApplication.find({hashId: hash}, (err, application) => {
			if(err){
				res.send(err);
			}

			res.status(200).json(application);
		});
	}
}