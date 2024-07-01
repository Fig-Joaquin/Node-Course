const users = [
    {id: 1, name: 'Jhon', age: 25 },
    {id: 2, name: 'Jane', age: 30 },
    {id: 3, name: 'Jim', age: 15 }

];

// function getUserId(id, callback) {
//     const user = users.find(function (user){
//         return user.id === id;
//     })

//     if (!user) {
//         return callback(new Error(`User not found`));
//     }

//     return callback(null, user);
// }

const getUserIds = (id, (err, user) => {

    const user = users.find( (user) => {
        return user.id === id
    });

    if (!user) {
        return callback(new Error(`User not found`));
    }

    return callback(null, user);
});

module.exports = {
    getUserId
}