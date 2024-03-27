//revisar -me parece repeticion entre message.router y user.router
const express = require('express'),
router = express.Router();
const { auth } = require('../middlewares/auth')


//para mandar un mensaje a un usuario especifico
//localhost:8000/
router.post('/inbox/:userId', auth, async (req, res) => {
    try {

        const { subject, content, to, user } = req.body

        res.send({
            _id: "aoksd9328sakd932is",
            subject,
            content,
            to,
            from: user.email
        })
    }
    catch (err) {
        res.status(400).send(err.msg || err.message || "wrong")
    }

})

module.exports = router;
