require('./db/mongoose');
const express = require('express');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

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


app.use(express.json());
app.use(userRouter);
app.use(taskRouter);



app.listen(port, () =>{
    console.log(`Listening on port `+port);
})

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
    // const task = await  Task.findById('607e7a209f6f7c570405370e')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
    const user = await User.findById('607e730c4162480828c7b673');
    await user.populate('tasks').execPopulate()
    console.log(user.tasks);

}

main()
