"use strict";
const bcrypt = require('bcrypt-nodejs')
module.exports = app => {

    const { existsOrError, notExistsOrError, equalsOrError } = app.app.controllers.validation
    const { confirMail } = app.app.controllers.email


    const get = async (req, res) => {
        try {
            res.status(200).render("signup", { erro: {}, campo: {} })

        } catch (err) {
            res.status(500).render("login", { erro: "Erro ao Carregar" })
        }

    }

    const getById = async (req, res) => {
        let user = await app.db('users')
            .select('*')
            .where({ 'id': req.session.userId })
            .first()
        if (user) {
            return res.status(200).render("profile", { erro: {}, campo: user })
        } else {
            res.status(500).render("login", { erro: "Conexão Perdida" })
        }

    }

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body }
    
        if (req.params.id) user.id = req.params.id
        try {
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.password, 'Senha não informada')
            existsOrError(user.cpf, 'CPF não informada')
            existsOrError(user.street, 'Endereço não informada')
            const userEmailFromDB = await app.db('users')
                .where({ email: user.email }).first()
            const userFromDB = await app.db('users')
                .where({ cpf: user.cpf }).first()
            if (!user.id) {
                notExistsOrError(userFromDB, 'Cpf já cadastrado')
                notExistsOrError(userEmailFromDB, 'Email já cadastrado')
            }
        } catch (msg) {
            return res.status(400).render("signup", { erro: msg, campo: user });
        }
        user.password = encryptPassword(user.password)
            await confirMail(user.email)
            await app.db('users')
                .insert(user) 
                .then(_ => res.render("login",{erro:{}}))
                .catch(err => res.status(500).render("signup", { erro: "ERRO AO CADASTRAR", campo: user }))
    }


    return { get, getById, save }
}