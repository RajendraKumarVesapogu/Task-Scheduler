
const {createSubTaskSchema, updateSubTaskSchema, deleteSubTaskSchema} = require('../validators/task-validator');
const {getSubTaskByTaskId, createSubTask, updateSubTask, deleteSubTask} = require('../helpers/subTask-helper');

module.exports.createSubTask = async (req, res) => {
    try {
        validatedRequest = await createSubTaskSchema.validateAsync(req.body);
        let subTaskToCreate = 
            {   
            task_id: validatedRequest.task_id,
            sub_task_title: validatedRequest.title,
            sub_task_status:0,
            is_deleted: false
            };
        let subTask = await createSubTask(subTaskToCreate);
        return res.status(200).json(subTask);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
}

module.exports.updateSubTask = async (req, res) => {
    try {
        validatedRequest = await updateSubTaskSchema.validateAsync(req.body);
        let subTaskToUpdate = 
            {   
            sub_task_id: req.params.sub_task_id,
            sub_task_title: validatedRequest.title,
            sub_task_status: validatedRequest.status
            };
        let subTask = await updateSubTask(subTaskToUpdate);
        return res.status(200).json(subTask);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
}       

module.exports.deleteSubTask = async (req, res) => {
    try {
        validatedRequest = await deleteSubTaskSchema.validateAsync(req.body);
        let subTaskToDelete = 
            {   
            sub_task_id: req.params.sub_task_id
            };
        let subTask = await deleteSubTask(subTaskToDelete);
        return res.status(200).json(subTask);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
}   

module.exports.getAllSubTasks = async (req, res) => {
    try {
        const task_id = req.params.task_id;
        let subTasks = await getSubTaskByTaskId(task_id);
        return res.status(200).json(subTasks);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
}
