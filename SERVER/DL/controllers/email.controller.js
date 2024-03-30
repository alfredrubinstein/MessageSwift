//data access layer for email
const emailModel = require('../models/email.model')

//funcion para crear un nuevo email segun el modelo de emailModel
async function create(data) {
    return await emailModel.create(data)
}
//EJEMPLO DE USO DE LA FUNCION create
// (async() => { 
//     const data = {
//         email: '',
//         msg: '',
//         isActive: true
//     }
//     const email = await create(data)
//     console.log(email);
// })();

//funcion para obtener los emails segun un filtro y ademas se puede especificar que datos se quieren poblar
async function read(filter,dataToPopulate) {
    return await emailModel.find(filter).populate(dataToPopulate)
}
//EJEMPLO DE USO DE LA FUNCION read CON filter Y dataToPopulate
// (async() => {
//     const filter = {isActive: true}
//     const dataToPopulate = 'emails.email'
//     const emails = await read(filter,dataToPopulate)
//     console.log(emails);
// })();


//funcion para obtener de email segun un filtro
async function readOne(filter) {
    const email= await emailModel.findOne(filter)
    console.log(email);
    return email
}
//EJEMPLO DE USO DE LA FUNCION readOne CON filter
// (async() => {
//     const filter = {_id:'6602a6f49937991b9cef6bcf'}
//     const email = await readOne(filter)
//     console.log(email);
// }
// )();


//funcion para actualizar un email segun su id y los datos que se quieren actualizar
async function update(id, data) {
    return await emailModel.findByIdAndUpdate(id, data, { new: true })
}
//EJEMPLO DE USO DE LA FUNCION update CON id Y data
// (async() => {
//     const id = '6602a6f49937991b9cef6bcf'
//     const data = {
//         email: '',
//         msg: '',
//         isActive: true
//     }
//     const email = await update(id,data)
//     console.log(email);
// })();




//funcion para eliminar un email segun su id
async function del(id) {
    return await update(id, { isActive: false })
}
//EJEMPLO DE USO DE LA FUNCION del CON id
// (async() => {
//     const id = '6602a6f49937991b9cef6bcf'
//     const email = await del(id)
//     console.log(email);
// })();


module.exports = { create, read, readOne, update, del }