"use strict"
module.exports = app => {

    const moment = require('moment')
    moment.locale('pt-br')

    const home = async (req, res) => {
        try {
            let user = await app.db('users')
                .select('pagamento', 'created_at')
                .where({ id: req.session.userId })

            if (user[0].pagamento == 0) {
                user[0].pagamento = `Aguardando pagamento, realizar em até 5 dias últeis a partir de ${moment(user[0].created_at).format('LLL')}`
            } else if (user[0].pagamento == 1) {
                user[0].pagamento = 'Pagamento realizado'
            }
            return res.status(201).send(user);
        } catch (msg) {
            return res.status(500).send('Erro ao carregar');
        }
    }

    const perfil = async (req, res) => {
        try {
            let user = await app.db('users')
                .select('email', 'name', 'telefone', 'street')
                .where({ id: req.session.userId })
            return res.status(201).send(user);
        } catch (msg) {
            return res.status(500).send('Erro ao carregar');
        }
    }

    const list = async (req, res) => {
        try {
            let user = await app.db('users')
                .select('id', 'email', 'name', 'telefone', 'pagamento', 'cpf')

            for (let i in user) {
                if (user[i].pagamento == 0) {
                    user[i].pagamento = 'Não Pago'
                } else if (user[i].pagamento == 1) {
                    user[i].pagamento = 'Pago'
                }
            }
            return res.status(201).send(user);
        } catch (msg) {
            return res.status(500).send('Erro ao carregar');
        }
    }


    const hack = async (req, res) => {
        try {
            let user = await app.db('hack')
                .select('*')
                .where({ p1: req.session.userId })
                .orWhere({ p2: req.session.userId })
                .orWhere({ p3: req.session.userId })
                .orWhere({ p4: req.session.userId })
                .first()


            return res.status(201).send(user);
        } catch (msg) {
            return res.status(500).send('Erro ao carregar');
        }
    }

    const statuscursos = async (req, res) => {
        // try {
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
        let dados = {
            'escrita': escrita.length,
            'python': python.length,
            'javascript': javascript.length,
            'libras': libras.length,
            'scrum': scrum.length,
            'bigdata': bigdata.length,
            'robotica': robotica.length,
            'si': si.length
        }

        return res.status(200).json(dados)
        // } catch{
        //     return res.status(500).json('Erro ao Carregar')
        // }
    }


    const mini = async (req, res) => {

        // try {

        let escrita = await app.db('escrita')
            .select('id')
            .where({ iduser: req.session.userId })
            .first()

        let python = await app.db('python')
            .select('id')
            .where({ iduser: req.session.userId })
            .first()

        let javascript = await app.db('javascript')
            .select('id')
            .where({ iduser: req.session.userId })

            .first()

        let libras = await app.db('libras')
            .select('id')
            .where({ iduser: req.session.userId })
            .first()

        let scrum = await app.db('scrum')
            .select('id')
            .where({ iduser: req.session.userId })
            .first()

        let bigdata = await app.db('bigdata')
            .select('id')
            .where({ iduser: req.session.userId })
            .first()

        let robotica = await app.db('robotica')
            .select('id')
            .where({ iduser: req.session.userId })
            .first()

        let si = await app.db('si')
            .select('id')
            .where({ iduser: req.session.userId })
            .first()

        let dados = new Array()

        if (escrita) {
            dados.push("AS ESPECIFICIDADES DA ESCRITA CIENTÍFICA")
        }
        if (python) {
            dados.push("APRENDIZADO DE MÁQUINA COM PYTHON")
        }
        if (javascript) {
            dados.push("INTRODUÇÃO A DESENVOLVIMENTO DE APLICATIVOS NATIVOS COM REACT NATIVE")
        } if (libras) {
            dados.push("DIALOGANDO NA 'VOZ' DO SURDO")
        } if (scrum) {
            dados.push("SCRUM NA PRÁTICA: TEORIA VS REALIDADE")
        } if (bigdata) {
            dados.push("INTRODUÇÃO A BIG DATA E DATA SCIENCE")
        } if (robotica) {
            dados.push("OFICINA DE ROBÓTICA COM KITS DA LEGO ®")
        } if (si) {
            dados.push("SEGURANÇA EM REDES E ANÁLISE DE VULNERABILIDADES")
        }


        return res.status(200).json(dados)
        // } catch{
        //     return res.status(500).json('Erro ao Carregar')
        // }
    }

    return { mini, statuscursos, home, perfil, hack, list }
}