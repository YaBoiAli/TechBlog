const router = require('express').Router();
const {User} = require('../../models/User')

router.post('/', async (req, res) =>{
    const userData = await User.create({
        username: req.body.username,
        password: req.body.password,
    });
});


module.exports = router;