const express = require("express");
const sequelize = require("./api/database/connection");
const setRelations = require("./api/database/relations");
const envVariables = require("../config");
const cors = require("cors");
const controlRouter = require("./api/routes/index");
const authenticate = require("./api/middleware/authenticate");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(authenticate)
app.use("/", controlRouter);

const port = envVariables.serverPortNumber;

server = app.listen(port, () => {
	console.log("listening on portnumber : " + port.toString());
	setRelations();
	sequelize
		.sync({ force: envVariables.database.force })
		.then((result) => {
			console.log("database synced sucessefully");
		})
		.catch((err) => console.error(err));
});

server.on("connection", () => {
	console.log("new connection");
});

process.stdin.resume(); // so the program will not close instantly
