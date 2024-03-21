const express = require("express");
const { createTask, getAllTasks, updateTask, deleteTask} = require("../controllers/task-controller");
const { createSubTask, getAllSubTasks, updateSubTask, deleteSubTask} = require("../controllers/sub-task-controller");
const TaskRouter = express.Router();

// TODO : implement HATEOAS
TaskRouter.get("/", (req, res) => {
	res.json({
		status: "to be implemented login HATEOAS",
	});
});

TaskRouter.post("/create",createTask);
TaskRouter.get('/all',getAllTasks);
TaskRouter.put('/update',updateTask);
TaskRouter.put('/delete',deleteTask);


TaskRouter.post("/subtask/create",createTask);
TaskRouter.get('/subtask/all',getAllTasks);
TaskRouter.put('/subtask/update',updateTask);
TaskRouter.put('/subtask/delete',deleteTask);


// TaskRouter.post("/subtask/create",createSubTask);

module.exports = TaskRouter;