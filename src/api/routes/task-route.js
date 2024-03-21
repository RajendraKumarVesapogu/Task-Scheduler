const express = require("express");
const Task = require("../database/models/task");
const TaskRouter = express.Router();

// TODO : implement HATEOAS
TaskRouter.get("/", (req, res) => {
	res.json({
		status: "to be implemented login HATEOAS",
	});
});

TaskRouter.post("/create", async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(200).json(task);
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
});
TaskRouter.get('/all',)

module.exports = TaskRouter;