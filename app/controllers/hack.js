"use strict";
module.exports = app => {

    const { existsOrError, notExistsOrError, equalsOrError } = app.app.controllers.validation
    const { hackMail } = app.app.controllers.email

    const save = async (req, res) => {
        const user = { ...req.body }
        user.p1 = req.session.userId

        let email1 = {}
        let email2 = {}
        let email3 = {}
        let email4 = {}
        email1 = req.session.userEmail
        user.email1 = req.session.userEmail
        try {
            existsOrError(user.p2, 'Usuario não informado')
            let busca = await app.db('users')
                .select('id', 'email')
                .where({ email: user.p2 })
                .first()
            let busca2 = await app.db('users')
                .select('id', 'email')
                .where({ email: user.p3 })
                .first()
            let busca3 = await app.db('users')
                .select('id', 'email')
                .where({ email: user.p4 })
                .first()


            existsOrError(busca, 'Usuario não encontrado')
            user.p2 = busca.id
            email2 = busca.email
            user.email2 = busca.email

            if (user.p3) {
                existsOrError(busca2, 'Usuario não encontrado')
                user.p3 = busca2.id
                email3 = busca2.email
                user.email3 = busca2.email
            } else {
                delete user.p3
            }

            if (user.p4) {
                existsOrError(busca2, 'Usuario não encontrado')
                user.p4 = busca3.id
                email4 = busca3.email
                user.email4 = busca3.email
            } else {
                delete user.p4
            }


        } catch (msg) {
            return res.status(400).render("cadhack", { erro: msg });
        }

        await app.db('hack')
            .insert(user)
            .then(_ => res.status(201).redirect("index2"))
            .catch(err => res.status(500).render("cadhack", { erro: "ERRO AO CADASTRAR" }))

        hackMail(email1, email2, email3, email4)

    }


    return { save }
}