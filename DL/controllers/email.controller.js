//data access layer for email
const emailModel = require('../models/email.model')

//funcion para crear un nuevo email segun el modelo de emailModel
async function create(data) {
    return await emailModel.create(data)
}

//funcion para obtener los emails segun un filtro y ademas se puede especificar que datos se quieren poblar
async function read(filter,dataToPopulate) {
    return await emailModel.find(filter).populate(dataToPopulate)
}

//funcion para obtener un email segun un filtro
async function readOne(filter) {
    return await emailModel.findOne(filter)
}
//funcion para actualizar un email segun su id y los datos que se quieren actualizar
async function update(id, data) {
    return await emailModel.findByIdAndUpdate(id, data, { new: true })
}
//funcion para eliminar un email segun su id
async function del(id) {
    return await update(id, { isActive: false })
}

module.exports = { create, read, readOne, update, del }