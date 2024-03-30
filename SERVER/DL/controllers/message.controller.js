//data access layer for message
const messageModel = require('../models/message.model')

//funciones CRUD
//funcion para crear un nuevo mensaje segun el modelo de messageModel
async function create(data) {
    return await messageModel.create(data)
}
//EJEMPLO DE USO DE LA FUNCION create
// (async() => {
//     const data = {
//         message: '',
//         isActive: true
//     }
//     const message = await create(data)
//     console.log(message);
// })();

//funcion para obtener los mensajes segun un filtro
async function read(filter) {
    return await messageModel.find(filter)
}
//EJEMPLO DE USO DE LA FUNCION read CON filter
// (async() => {
//     const filter = {isActive: true}
//     const messages = await read(filter)
//     console.log(messages);
// })();

//funcion para obtener un mensaje segun un filtro
async function readOne(filter) {
    return await messageModel.findOne(filter)
}
//EJEMPLO DE USO DE LA FUNCION readOne CON filter
// (async() => {
//     const filter = {_id:'6602a6f49937991b9cef6bcf'}
//     const message = await readOne(filter)
//     console.log(message);
// }();

//funcion para actualizar un mensaje segun su id y los datos que se quieren actualizar
async function update(id, data) {
    // return await messageModel.findOneAndUpdate({_id:id}, data,{new : true})
    return await messageModel.findByIdAndUpdate(id, data, { new: true })
}
//EJEMPLO DE USO DE LA FUNCION update CON id Y data
// (async() => {
//     const id = '6602a6f49937991b9cef6bcf'
//     const data = {
//         message: '',
//         isActive: true
//     }
//     const message = await update(id,data)
//     console.log(message);
// })();

//funcion para eliminar un mensaje segun su id
async function del(id) {
    return await update(id, { isActive: false })
}
//EJEMPLO DE USO DE LA FUNCION del CON id
// (async() => {
//     const id = '6602a6f49937991b9cef6bcf'
//     const message = await del(id)
//     console.log(message);
// })();


module.exports = { create, read, readOne, update, del }