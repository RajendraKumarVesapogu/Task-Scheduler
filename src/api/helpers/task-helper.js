const Task = require('../database/models/task')

module.exports.getTaskById = async (id) => {
    return await Task.findByPk(id);
}
module.exports.createTask = async (task) => {
    return await Task.create(task);
}
module.exports.updateTask = async (task) => {
    return await task.save();
}
module.exports.deleteTask = async (task) => {
    return await task.destroy();
}
module.exports.getTaskByUserId = async (userId) => {
    return await Task.findAll({ where: { userId: userId } });
}
