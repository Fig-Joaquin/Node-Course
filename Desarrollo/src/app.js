// const emailTemplate = require('./js-foundation/01-template');    
// const {getUserId} = require('./js-foundation/03-callbacks');
const {getAge, getId, httpClientPlugin, buildLogger } = require('./js-foundation/plugins');
const {getPokemonId} = require('./js-foundation/06-promises');



const logger = buildLogger('app.js');
logger.log('prueba log');
logger.error('log error')







// ! Promises
// getPokemonId(2) 
//     .then(pokemon => console.log(pokemon))
//     .catch(err => console.log('Sin resultados'));
    




// ! Factory Functions
// const {makeBuildPerson} = require('./js-foundation/05-factory');

// const obj = {name: 'joaquin', birthdate: ('04-10-2000')}

// const makePerson = makeBuildPerson({getId, getAge})
// const joaquin = makePerson(obj) 
// console.log(joaquin)



// getUserId(id, function(err, user){
//     if(err){
//         throw new Error('User not found');
//     }

//     console.log(`User found: ${user.name}, age: ${user.age}`);
// });
