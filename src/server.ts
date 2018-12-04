import app from "./app";
import * as https from "https";
import * as fs from "fs";
import * as path from "path";
import * as process from "process";
const PORT = 3000;

const keyPath = path.join(__dirname, '..', 'config', "server.key");
const certPath = path.join(__dirname, '..', 'config', "server.crt")

const httpsOptions = {
	key: fs.readFileSync(keyPath),
	cert: fs.readFileSync(certPath)
};

const server = https.createServer(httpsOptions, app).listen(PORT, () => {
	console.log('express server listening on ' + PORT);
});

// process.on('SIGTERM', () => {
// 	console.info('SIGTERM signal received.');
// 	console.log('Closing http server.');
// 	server.close(() => {
// 		console.log('Http server closed.');
// 	});
// });

// app.use(function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


// app.listen(PORT, () => {
// 	console.log('express server listening on ' + PORT);
// })