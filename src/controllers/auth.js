const authModels = require('../models/auth')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { response } = require('../helpers/')

module.exports = {
    postLogin: async function(req, res) {
        try {
            const setData = req.body
            const result = await authModels.checkUser(setData)
            console.log(result)
            const check = bcrypt.compare(setData.password, result[0].password)
            console.log(check)
            if(check) {
                const { id, email, name, balance, photo, verified} = result[0]
                const token = jwt.sign({
                    id,
                    name,
                    email,
                    balance,
                    photo,
                    verified
                }, process.env.SECRET_KEY)
                response(res, 200, token)
            }
        } catch (error) {
            response(res, 400, {message: 'Login Failed'})
        }
    },
    postRegister: async function(req, res) {
        try {
            const setData = req.body
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(req.body.password, salt)
            const newData = {
                ...setData,
                password: hash
            }
            const result = await authModels.postRegister(newData)
            res.status(201).send({
                data: result
            })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }
}