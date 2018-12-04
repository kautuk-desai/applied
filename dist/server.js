"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const https = require("https");
const fs = require("fs");
const path = require("path");
const PORT = 3000;
const keyPath = path.join(__dirname, '..', 'config', "server.key");
const certPath = path.join(__dirname, '..', 'config', "server.crt");
const httpsOptions = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
};
const server = https.createServer(httpsOptions, app_1.default).listen(PORT, () => {
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
//# sourceMappingURL=server.js.map