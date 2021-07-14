const app = require('./app');
const port = process.env.PORT;


app.listen(port, () =>{
    console.log(`Listening on port `+port);
})
//configuration




// app.use((req, res, next) => {
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     }else{
//         next()
//     }
//
// })

// app.use((req, res, next) => {
//     const methods = ['GET', 'POST', 'PATCH','DELETE'];
//     if(methods.includes(req.method)){
//         res.status(503).send('Internal Server Error')
//     }
//     else{
//         next()
//     }
// })









// const Task = require('./models/task');
// const User = require('./models/user');
//
// const main = async () => {
//     // const task = await  Task.findById('607e7a209f6f7c570405370e')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user = await User.findById('607e730c4162480828c7b673');
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks);
//
// }
//
// main()
