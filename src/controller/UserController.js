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

    const users = await User.find({}, function(err, users) {
        if(err) {
            console.log(err);
        }
    })

    res.json(users);
}

const show = async (req, res) => {
    const { user_id } = req.params;

    await User.findById(user_id, (err, user) => {
        if(err) {
            console.log(err);
        }

        if(user) {
            res.json(user)
        }

        res.json({
            "msg": "Não foi possivel encontrar o usuário"
        })
    })
}

const destroy = async (req, res) => {
    const { user_id } = req.params;

    await User.findByIdAndDelete(user_id, (err, user) => {
        if(err) {
            console.log(err)
        }

        if(user) {
            delete user;
            res.json({
                "msg": "Usuario deletado"
            })
        }

        res.json({
            "msg": "Usuario não encontrado"
        })
    });
}

module.exports = {
    store,
    index,
    show,
    destroy
}