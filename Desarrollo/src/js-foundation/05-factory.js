// Función que crea una función
// const {getAge, getId} = require('./plugins');

// const obj = {name: 'joaquin', birthdate: ('04-10-2000')}

const makeBuildPerson = ({getId, getAge}) => {

    return ({name, birthdate}) =>  {
        return {
        id: getId(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),
        }
    }
}


    

// const jhon = BuilPerson(obj)

// console.log(jhon)

module.exports = {
    makeBuildPerson,
};