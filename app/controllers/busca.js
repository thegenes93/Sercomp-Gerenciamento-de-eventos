
module.exports = app => {
    const { pagamentoMail } = app.app.controllers.email

    const get = async (req, res) => {
       
        let dados = await app.db('users')
            .select('id', 'email', 'telefone', 'name', 'pagamento')
            .where('cpf', 'like', `%${req.params.id}%`)

        for (let i in dados) {
            if (dados[i].pagamento == 0) {
                dados[i].pagamento = 'Não Pago'
            } else if (dados[i].pagamento == 1) {
                dados[i].pagamento = 'Pago'
            }
        }
        res.status(200).json(dados)
    }


    const update = async (req, res) => {

        let dados = await app.db('users')
            .select('*')
            .where({ id: req.params.id })
            .first()

        dados.receiver = req.session.userId
        dados.pagamento = 1

        await pagamentoMail(dados.email)
        dados.notf = 1
        await app.db('users')
            .update(dados)
            .where({ id: req.params.id })
            .then(_ => res.status(201).json("Pagamento efetuado"))
            .catch(err => res.status(500).json("Erro ao efetuar pagamento"))

    }



    return { get, update }
}