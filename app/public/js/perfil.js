$(document).ready(function () {
    $.get("/tela-perfil", function (data) {
      $("#name").html(data[0].name)
      $("#telefone").html(data[0].telefone)
      $("#email").html(data[0].email)
      $("#street").html(data[0].street)     
    });
  })
