
const {createTask, getTaskByUserId, getTaskById, updateTask, deleteTask} = require('../services/task-service');
const {createTaskSchema, getAllTasksSchema, updateTaskSchema, deleteTaskSchema} = require('../validators/task-validator');


module.exports.createTask = async (req, res) => {
    try {
        validatedRequest = await createTaskSchema.validateAsync(req.body);
        let task = await createTask(validatedRequest);
        return res.status(200).json(task);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
}
module.exports.getAllTasks = async (req, res) => {
    try {
        const user_id = req.user.user_id;
        let tasks = await getTaskByUserId();
        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
}
module.exports.getTaskById = async (req, res) => {
    try {
        let task_id = req.params.task_id;
        let task = await getTaskById(task_id);
        return res.status(200).json(task);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
}
