require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('607c6ef95884ab501cc06b7a')
//     .then((task) => {
//         console.log(task);
//         return Task.countDocuments({ completed: false})
//     }).then((result) =>{
//         console.log(result);
// }).catch((e) =>{
//     console.log(e);
// })


const deleteTaskAndCount = async (id) =>{
    const task = await Task.findByIdAndDelete(id);
    return await Task.countDocuments({completed: false})
}

deleteTaskAndCount('607c6d3256cae1522039152c')
    .then((count) => {
        console.log(count);
    })
    .catch((e) =>{
        console.log(e);
    })
