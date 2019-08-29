const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.email || !req.body.password) {
            return res.render("login", { erro: 'Informe o email e a senha' }).status(400)
        }

        const user = await app.db('users')
        .where({ email: req.body.email })
        .first()

        if (!user) return res.render("login", { erro: 'Usuario não encontrado!' }).status(400)
        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if (!isMatch) return res.status(401).render("login", { erro: 'Email/Senha Inválidos' })

        if (isMatch) {
            req.session.authenticate = true
            req.session.userId = user.id
            req.session.admin = user.admin
            req.session.userEmail = user.email
            console.log(`Usuario  ${req.session.userEmail} acabou de entrar`)
        if( req.session.admin){
            res.redirect("/admin")
        } else{
            res.redirect("/index2")
        }
       
        
        }
        else {
            res.status(500).render("login", { erro: {} })
        }

    }

    const authenticate = async (req, res, next) => {
        if (req.session.authenticate) {
            next()
        } else {
            res.status(500).redirect("login")
        }
    }

    const admin = async (req, res, next) => {
        if (req.session.admin) {
            return next()
        } else {
            return res.status(500).redirect("login")
        }
    }
    
    return { signin, authenticate, admin }
}