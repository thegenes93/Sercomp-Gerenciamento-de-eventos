'use strict'
module.exports = app => {

    const verificar = async (req, res) => {
        console.log("verificação Iniciada")
        let user = await app.db('users')
            .select('id', 'name','pagamento', 'created_at')
            .where({ pagamento: 0 })

        let data = new Date()

        for (let i in user) {
            let outraData = new Date();
            outraData.setDate(user[i].created_at.getDate() + 7)
            if (outraData < data) {
                console.log(`Usuario ${user[i].name} deletado`)
                await app.db('escrita')
                    .where({ iduser: user[i].id })
                    .del()
                await app.db('python')
                    .where({ iduser: user[i].id })
                    .del()
                await app.db('javascript')
                    .where({ iduser: user[i].id })
                    .del()
                await app.db('libras')
                    .where({ iduser: user[i].id })
                    .del()
                await app.db('scrum')
                    .where({ iduser: user[i].id })
                    .del()
                await app.db('bigdata')
                    .where({ iduser: user[i].id })
                    .del()
                await app.db('robotica')
                    .where({ iduser: user[i].id })
                    .del()
                await app.db('si')
                    .where({ iduser: user[i].id })
                    .del()
                await app.db('users')
                    .where({ id: user[i].id })
                    .del()
            }
        }
        console.log("Fim verificação")
        setTimeout(verificar, 3600000)
    }

    verificar()

    return { verificar }
}