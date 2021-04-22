require('../src/db/mongoose');
const User = require('../src/models/user');

// 607c16520460e028acd31622

// User.findByIdAndUpdate('607c1eaad4df9f29f04f6a9d', { age: 1})
//     .then((user) => {
//         console.log(user);
//         return User.countDocuments({ age:1})
//     }).then((result) => {
//         console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const updateAgeAndCount = async (id, age) =>{
    const user = await User.findByIdAndUpdate(id, {age});
    return await User.countDocuments({age});
}

updateAgeAndCount('607c1eaad4df9f29f04f6a9d',2)
.then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})
