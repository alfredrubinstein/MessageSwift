const express = require('express'),
router = express.Router();
const userService = require('../BL/user.service')
const emailService = require('../BL/email.service')
const { auth } = require('../middelewares/auth')


//localhost:8000/email//inbox/6602a6f49937991b9cef6bba
router.get('/inbox/:userId', async (req, res) => {
    try {
//         const user=await userService.getUserById(req.params.userId)
// console.log(user);
//         let result = await emailService.getAllRecieved(user._id)
//         res.send(result)
let result = await emailService.getAllRecieved(req.params.userId)
        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.msg || err.message || "wrong")
    }
})



router.post('/:emailId', async (req, res) => {
    try {
        let result = await emailService.addNewMessageToEmail(req.params.emailId, req.body)
        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.msg || err.message || "wrong")
    }
})







module.exports = router;