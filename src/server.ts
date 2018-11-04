import app from "./app";
import * as https from "https";
import * as fs from "fs";
import * as path from "path";
const PORT = 3000;

const keyPath = path.join(__dirname, '..', 'config', "server.key");
const certPath = path.join(__dirname, '..', 'config', "server.crt")

const httpsOptions = {
	key: fs.readFileSync(keyPath),
	cert: fs.readFileSync(certPath)
};

https.createServer(httpsOptions, app).listen(PORT, () => {
	console.log('express server listening on ' + PORT);
});

// app.use(function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


// app.listen(PORT, () => {
// 	console.log('express server listening on ' + PORT);
// })