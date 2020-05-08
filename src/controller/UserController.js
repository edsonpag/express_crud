const User = require('../model/User');

const store = async (req, res) => {

    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })

    return res.json(user)
}

const index = async (req, res) => {

    const users = await User.find({}, function(err, users) {
        if(err) {
            console.log(err)
        }
    })

    res.json(users)
}

const show = async (req, res) => {
    const { user_id } = req.params


    res.json({
        "msg": "ok"
    })
}

module.exports = {
    store,
    index,
    show
}