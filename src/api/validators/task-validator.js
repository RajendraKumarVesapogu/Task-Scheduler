const Joi = require("joi");

const createTaskSchema = Joi.object({
    title : Joi.string().required(),
    description: Joi.string().required(),
    due_date: Joi.date().required(),
});

const createSubTaskSchema = Joi.object({
    taskId: Joi.number().required(),
    subTitle: Joi.string().required(),
    description: Joi.string().required(),
});

const getAllTasksSchema = Joi.object({
});

const getAllSubTasksSchema = Joi.object({
    taskId: Joi.number().required(),
});

const updateTaskSchema = Joi.object({
    taskId: Joi.number().required(),
    due_date: Joi.date().format('YYYY-MM-DD HH:mm').required(),
    status: Joi.string().valid("0", "1", "2").required(),
});
const updateSubTaskSchema = Joi.object({
    subTaskId: Joi.number().required(),
    description: Joi.string().required(),
});

const deleteTaskSchema = Joi.object({
    id: Joi.number().required(),
});

const deleteSubTaskSchema = Joi.object({
    id: Joi.number().required(),
});


module.exports = loginRequestSchema;
