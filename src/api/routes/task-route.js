const express = require("express");
const TaskRouter = express.Router();

// TODO : implement HATEOAS
TaskRouter.get("/", (req, res) => {
	res.json({
		status: "to be implemented login HATEOAS",
	});
});

TaskRouter.get('/all',)

module.exports = TaskRouter;