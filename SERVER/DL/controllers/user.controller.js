//data access layer for user
//en controllers pondremos las funciones crud
const userModel = require('../models/user.model')

//funcion para crear un nuevo usuario segun el modelo de userModel
async function create(data) {
    return await userModel.create(data)
}
//EJEMPLO DE USO DE LA FUNCION create
// (async() => {
//     const data = {
//         name: '',
//         lastname: '',
//         email: '',
//         password: '',
//         isActive: true
//     }
//     const user = await create(data)
//     console.log(user);
// })();


//funcion para obtener los usuarios segun un filtro y ademas se puede especificar que datos se quieren poblar
//el primer parametro es el filtro y el segundo es el populate que se va a hacer
async function read(filter,dataToPopulate){
    return await userModel.find(filter).populate(dataToPopulate)
    // return await userModel.find(filter).populate(populate ? 'emails.email' :'')
}
//EJEMPLO DE USO DE LA FUNCION read CON filter Y dataToPopulate
// (async() => {
//     const filter = {isActive: true}
//     const dataToPopulate = 'emails.email'
//     const users = await read(filter,dataToPopulate)
//     console.log(users);
// })();


//funcion para obtener un usuario segun un filtro y ademas se puede especificar que datos se quieren poblar
async function readOne(filter,dataToPopulate){
    return await userModel.findOne(filter).populate(dataToPopulate)
}
//EJEMPLO DE USO DE LA FUNCION readOne CON filter
// (async() => {
//     const filter = {_id:'6602a6f49937991b9cef6bcf'}
//     const user = await readOne(filter)
//     console.log(user);
// }
// )();


//funcion para actualizar un usuario segun su id y los datos que se quieren actualizar
async function update(id, data){
    return await userModel.findByIdAndUpdate(id, data, {new: true})
    //{new: true} es para que retorne el usuario actualizado
}
//EJEMPLO DE USO DE LA FUNCION update CON id Y data
// (async() => {
//     const id = '6602a6f49937991b9cef6bcf'
//     const data = {
//         name: '',
//         lastname: '',
//         email: '',
//         password: '',
//         isActive: true
//     }
//     const user = await update(id,data)
//     console.log(user);
// })();

//funcion para eliminar un usuario segun su id
async function del(id){
    return await update(id, {isActive: true})
}
//EJEMPLO DE USO DE LA FUNCION del CON id
// (async() => {
//     const id = '6602a6f49937991b9cef6bcf'
//     const user = await del(id)
//     console.log(user);
// })();



module.exports = {
    create,
    read,
    readOne,
    update,
    del
};