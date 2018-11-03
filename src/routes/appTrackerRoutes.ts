import {Request, Response} from "express";

export class Routes{
	public routes(app): void{
	app.route('/isapplied').get((req: Request, res: Response) => {
	res.status(200).send({
		message: 'Checking if job is already applied'
	});
	});
	}
}