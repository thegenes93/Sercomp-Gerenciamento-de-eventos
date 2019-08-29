'use strict'
module.exports = app => {

    const save = async (req, res) => {

        const data = { ...req.body }

        let user = await app.db('users')
            .select('email', 'name')
            .where({ id: req.session.userId })

        user[0].iduser = req.session.userId;


        let escrita = await app.db('escrita')
            .select('id')

        let python = await app.db('python')
            .select('id')

        let javascript = await app.db('javascript')
            .select('id')

        let libras = await app.db('libras')
            .select('id')

        let scrum = await app.db('scrum')
            .select('id')

        let bigdata = await app.db('bigdata')
            .select('id')

        let robotica = await app.db('robotica')
            .select('id')

        let si = await app.db('si')
            .select('id')


        if (data.manha) {
            if (data.manha == 'escrita') {
                if (escrita.length <= 25) {
                    await app.db('escrita')
                        .insert(user)
                } else {
                    return res.status(500).json("Limite de vagas atingidos")
                }

            }
            if (data.manha == 'python') {
                if (python.length <= 20) {
                    await app.db('python')
                        .insert(user)
                } else {
                    return res.status(500).json("Limite de vagas atingidos")
                }

            }
            if (data.manha == 'javascript') {
                if (javascript.length <= 30) {
                    await app.db('javascript')
                        .insert(user)
                } else {
                    return res.status(500).json("Limite de vagas atingidos")
                }

            }
        }
        if (data.tarde) {
            if (data.tarde == 'libras') {
                if (libras.length <= 25) {
                    await app.db('libras')
                        .insert(user)
                } else {
                    return res.status(500).json("Limite de vagas atingidos")
                }

            }
            if (data.tarde == 'scrum') {
                if (scrum.length <= 30) {
                    await app.db('scrum')
                        .insert(user)
                } else {
                    return res.status(500).json("Limite de vagas atingidos")
                }

            }
            if (data.tarde == 'bigdata') {
                if (bigdata.length <= 30) {
                    await app.db('bigdata')
                        .insert(user)
                } else {
                    return res.status(500).json("Limite de vagas atingidos")
                }

            }
        }
        if (data.noite) {
            if (data.noite =='robotica') {
                if (robotica.length <= 30) {
                    await app.db('robotica')
                        .insert(user)
                } else {
                    return res.status(500).json("Limite de vagas atingidos")
                }

            }
            if (data.noite =='si') {
                if (si.length <= 30) {
                    await app.db('si')
                        .insert(user)
                } else {
                    return res.status(500).json("Limite de vagas atingidos")
                }

            }
        }

        return res.status(201).redirect("/index2")

    }


    return { save }
}