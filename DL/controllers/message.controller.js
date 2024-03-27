//data access layer for message
const messageModel = require('../models/message.model')

//funciones CRUD
//funcion para crear un nuevo mensaje segun el modelo de messageModel
async function create(data) {
    return await messageModel.create(data)
}
//funcion para obtener los mensajes segun un filtro
async function read(filter) {
    return await messageModel.find(filter)
}
//funcion para obtener un mensaje segun un filtro
async function readOne(filter) {
    return await messageModel.findOne(filter)
}
//funcion para actualizar un mensaje segun su id y los datos que se quieren actualizar
async function update(id, data) {
    // return await messageModel.findOneAndUpdate({_id:id}, data,{new : true})
    return await messageModel.findByIdAndUpdate(id, data, { new: true })
}
//funcion para eliminar un mensaje segun su id
async function del(id) {
    return await update(id, { isActive: false })
}

module.exports = { create, read, readOne, update, del }