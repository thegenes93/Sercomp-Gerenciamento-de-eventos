'use strict'
const nodemailer = require('nodemailer');

module.exports = app => {
    function confirMail(email, msg) {
     
       
        const  transporter = nodemailer.createTransport({ 
            host: 'smtp.umbler.com',
            port: 587,
            secure: false,
            auth: {
              user: 'contato@sercomppb.com',
              pass: 'senhatopdanada'
            }
          })

          const mailOptions = { 
            from: 'contato@sercomppb.com',
            to: email,
            subject: "CONFIRMAÇÃO DE INSCRIÇÃO - SERCOMP 2019",
            html: `<style>@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');{font-family: 'Montserrat', sans-serif;}</style><body style="color: black; padding: 50px;"> <div class="container" id="conteudo" style="color: black;"> <div class="p-5 w-100 container"> <div class="col-lg-6 col-md-9 col-sm-12 text-center m-auto "> <div class="justify-content-center m-auto"> <div class="row justify-content-center"> <div class="w-100"> <a href="https://sercomppb.com/"> <img src="https://sercomppb.com/image/simbolo2.png" class="m-1 p-0 img-fluid" style="width: 200px"> </a> </div><div class="w-100"> <a href="https://sercomppb.com/"> <img src="https://sercomppb.com/image/typografia2.png" class="m-1 p-0 img-fluid" style="width: 200px"> </a> </div></div><h2 class=""><strong>Sua inscrição foi efetuada, procure agora a equipe para efetuar o pagamento e ter sua inscrição efetivada!</strong> </div></h2> <a href="https://sercomppb.com/" class="m-0 p-3"><h3><strong>Visite o nosso site!</strong></h3></a> </div></div></div></div></body>`
          }

          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              return 
            }
            
            console.log(info)
          })
    }
    


    function hackMail(email1,email2,email3,email4) {
       
        const  transporter = nodemailer.createTransport({ 
            host: 'smtp.umbler.com',
            port: 587,
            secure: false,
            auth: {
              user: 'contato@sercomppb.com',
              pass: 'senhatopdanada'
            }
          })

          const mailOptions = { 
            from: 'contato@sercomppb.com',
            to: `${email1},${email2},${email3},${email4}`,
            subject: "CONFIRMAÇÃO DE INSCRIÇÃO HACKDAY - SERCOMP 2019",
            html: `<style>@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');{font-family: 'Montserrat', sans-serif;}</style><body style="color: black; padding: 50px;"> <div class="container" id="conteudo" style="color: black;"> <div class="p-5 w-100 container"> <div class="col-lg-6 col-md-9 col-sm-12 text-center m-auto "> <div class="justify-content-center m-auto"> <div class="row justify-content-center"> <div class="w-100"> <a href="https://sercomppb.com/"> <img src="https://sercomppb.com/image/simbolo2.png" class="m-1 p-0 img-fluid" style="width: 200px"> </a> </div><div class="w-100"> <a href="https://sercomppb.com/"> <img src="https://sercomppb.com/image/typografia2.png" class="m-1 p-0 img-fluid" style="width: 200px"> </a> </div></div><h2 class=""><strong>Seu cadastro no Hackday foi efetuado, boa sorte</strong> </div></h2> <a href="https://sercomppb.com/" class="m-0 p-3"><h3><strong>Visite o nosso site!</strong></h3></a> </div></div></div></div></body`
          }

          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              return 
            }
             
            console.log(info)
          })
    }


    function pagamentoMail(email, msg) {
     
       
      const  transporter = nodemailer.createTransport({ 
          host: 'smtp.umbler.com',
          port: 587,
          secure: false,
          auth: {
            user: 'contato@sercomppb.com',
            pass: 'senhatopdanada'
          }
        })

        const mailOptions = { 
          from: 'contato@sercomppb.com',
          to: `${email}`,
          subject: "CONFIRMAÇÃO DE PAGAMENTO - SERCOMP 2019",
          html: `<style>@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');{font-family: 'Montserrat', sans-serif;}</style><body style="color: black; padding: 50px;"> <div class="container" id="conteudo" style="color: black;"> <div class="p-5 w-100 container"> <div class="col-lg-6 col-md-9 col-sm-12 text-center m-auto "> <div class="justify-content-center m-auto"> <div class="row justify-content-center"> <div class="w-100"> <a href="https://sercomppb.com/"> <img src="https://sercomppb.com/image/simbolo2.png" class="m-1 p-0 img-fluid" style="width: 200px"> </a> </div><div class="w-100"> <a href="https://sercomppb.com/"> <img src="https://sercomppb.com/image/typografia2.png" class="m-1 p-0 img-fluid" style="width: 200px"> </a> </div></div><h2 class=""><strong>Seu pagamento foi efetivado, aproveite o evento</strong> </div></h2> <a href="https://sercomppb.com/" class="m-0 p-3"><h3><strong>Visite o nosso site!</strong></h3></a> </div></div></div></div></body>`
        }

        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            return 
          }
          
          console.log(info)
        })
  }
    
    
 
    return {confirMail, hackMail, pagamentoMail }
}