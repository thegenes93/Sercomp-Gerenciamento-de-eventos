$(document).ready(function () {
    $.get("/tela-perfil", function (data) { 
      $("#p1").val(data[0].email)
    });
  })



  

