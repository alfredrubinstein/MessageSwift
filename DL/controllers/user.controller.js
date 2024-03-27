//data access layer for user
//en controllers pondremos las funciones crud
const userModel = require('../models/user.model')

//funcion para crear un nuevo usuario segun el modelo de userModel
async function create(data) {
    return await userModel.create(data)
}

//funcion para obtener los usuarios segun un filtro y ademas se puede especificar que datos se quieren poblar
//el primer parametro es el filtro y el segundo es el populate que se va a hacer
async function read(filter,dataToPopulate){
    return await userModel.find(filter).populate(dataToPopulate)
    // return await userModel.find(filter).populate(populate ? 'emails.email' :'')
}

//funcion para obtener un usuario segun un filtro y ademas se puede especificar que datos se quieren poblar
async function readOne(filter,dataToPopulate){
    return await userModel.findOne(filter).populate(dataToPopulate)
}

//funcion para actualizar un usuario segun su id y los datos que se quieren actualizar
async function update(id, data){
    return await userModel.findByIdAndUpdate(id, data, {new: true})
    //{new: true} es para que retorne el usuario actualizado
}

//funcion para eliminar un usuario segun su id
async function del(id){
    return await update(id, {isActive: true})
}


module.exports = {
    create,
    read,
    readOne,
    update,
    del
};