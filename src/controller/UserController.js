const User = require('../model/User');

const store = async (req, res) => {

    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })

    return res.json(user);
}

const index = async (req, res) => {

    const users = await User.find({})

    res.json(users);
}

const show = async (req, res) => {
    const { user_id } = req.params;

    const user = await User.findById(user_id)

    if(user) {
        res.json(user)
    }
}

const destroy = async (req, res) => {
    const { user_id } = req.params;

    const user = await User.findByIdAndDelete(user_id, { useFindAndModify: false });

    res.json({
        "msg": "Usuario deletado"
    })
}

const update = async (req, res) => {
    const { user_id } = req.params;
    const { name, email, age } = req.body;
    const Update = {
        name,
        email,
        age
    }
    
    const user = await User.findByIdAndUpdate(user_id, Update, { useFindAndModify: false })

    res.json({
        "msg": "Usuario atualizado"
    })
}

module.exports = {
    store,
    index,
    show,
    destroy,
    update
}