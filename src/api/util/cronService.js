const User = require('../database/models/user');
const Task = require('../database/models/task');
const SubTask = require('../database/models/subTask');

module.exports.checkForDueTasks = async () => {
    console.log
    const users = await User.findAll({
        include: [
        {
            model: Task,
            where: {            
            task_due_date: {$lt: new Date()}, 
            },
        },
        ],
    });
    

    users.sort((a, b) => a.priority - b.priority);
    return users;
}

module.exports.updateTaskPriority = async () => {  
    
    const tasks = await Task.findAll();
    
    tasks.forEach(async (task) => {
        
            const diff = task.due_date - new Date();
            if (diff <= 0) {
                task.priority = 0;
            } else if (diff <= 86400000) {
                task.priority = 1;
            } else if (diff <= 172800000) {
                task.priority = 2;
            } else {
                task.priority = 3;
            }
            await task.save();
        
    });
    
    // console.log(tasks);
    return null;
}
