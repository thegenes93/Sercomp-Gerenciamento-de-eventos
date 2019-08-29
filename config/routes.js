module.exports = app => {
    let controllers = app.app.controllers

    // Rotas Mobile
    app.route('/')
        .get(controllers.render.index)

    app.route('/login')
        .get(controllers.login.get)
        .post(controllers.auth.signin)

    app.route('/cadastrar')
        .get(controllers.users.get)
        .post(controllers.users.save)

    app.route('/index')
        .get(controllers.render.index)

    app.route('/submissao')
        .get(controllers.render.submissao)

    app.route('/hackday')
        .get(controllers.render.hackday)
    //Usuario Mobile    

    app.route('/status')
        .all(controllers.auth.authenticate)
        .get(controllers.status.home)

    app.route('/statushack')
        .all(controllers.auth.authenticate)
        .get(controllers.status.hack)

    app.route('/statusmini')
        .all(controllers.auth.authenticate)
        .get(controllers.status.mini)

    app.route('/lista')
        .all(controllers.auth.admin)
        .get(controllers.status.list)

    app.route('/tela-perfil')
        .all(controllers.auth.authenticate)
        .get(controllers.status.perfil)

    app.route('/cadhackday')
        .all(controllers.auth.authenticate)
        .get(controllers.render.cadhack)
        .post(controllers.hack.save)

    app.route('/agenda')
        .all(controllers.auth.authenticate)
        .get(controllers.render.agenda)

    app.route('/home')
        .all(controllers.auth.authenticate)
        .get(controllers.render.home)

    app.route('/perfil')
        .all(controllers.auth.authenticate)
        .get(controllers.render.perfil)
    //Usuario Mobile fim   
    //  Rotas Mobile FIM

    app.route('/index2')
        .all(controllers.auth.authenticate)
        .get(controllers.render.index2)

    app.route('/admin')
        .all(controllers.auth.admin)
        .get(controllers.render.admin)

    app.route('/getdate:id')
        .all(controllers.auth.admin)
        .get(controllers.busca.get)

    app.route('/update:id')
        .all(controllers.auth.admin)
        .get(controllers.busca.update)

    app.route('/cursos')
        .all(controllers.auth.authenticate)
        .get(controllers.render.cursos)
        .post(controllers.cursos.save)

    app.route('/statuscursos')
        .all(controllers.auth.authenticate)
        .get(controllers.status.statuscursos)

    // Rotas PC
    //Usuario DESCKTOP    

    app.route('/agenda-pc')
        .all(controllers.auth.authenticate)
        .get(controllers.render.agendapc)

    app.route('/home-pc')
        .all(controllers.auth.authenticate)
        .get(controllers.render.homepc)


    app.route('/cadhackdaypc')
        .all(controllers.auth.authenticate)
        .get(controllers.render.cadhackpc)
        .post(controllers.hack.save)

    app.route('/perfil-pc')
        .all(controllers.auth.authenticate)
        .get(controllers.render.perfilpc)

    //Usuario DESCKTOP FIM
    // Rotas PC Fim

}