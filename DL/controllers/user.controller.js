//data access layer for user
//en controllers pondremos las funciones crud
const userModel = require('../models/user.model')


async function create(data) {
    return await userModel.create(data)
}
//el primer parametro es el filtro y el segundo es el populate que se va a hacer
async function read(filter,dataToPopulate){
    return await userModel.find(filter).populate(dataToPopulate)
    // return await userModel.find(filter).populate(populate ? 'emails.email' :'')
}
async function readOne(filter,dataToPopulate){
    return await userModel.findOne(filter).populate(dataToPopulate)
}
async function update(id, data){
    return await userModel.findByIdAndUpdate(id, data, {new: true})
    
}
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