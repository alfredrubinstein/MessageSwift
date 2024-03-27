 //bussiness logic for user
 //aqui podemos hacer validaciones o calculos
 const userController = require('../DL/controllers/user.controller');


async function createUser(data) {
  return await userController.create(data);
}


async function getUserById(userId) {
  return await userController.readOne({ _id:userId });
}





// async function getUserByEmail(email) {
//   return await userController.readOne({
//     email: email,
//   });




module.exports = {
    createUser,
    getUserById
}