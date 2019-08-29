$(document).ready(function () {
    $.get("/status", function (data) {
      $("#pag").html(data[0].pagamento)  
    });
  })

  $(document).ready(function () {
    $.get("/statushack", function (data) {
      if(data){
        $("#hack").html("Cadastro Realizado")  
      }  
    });
  })


  $(document).ready(function () {
    html = '<a  href="/cursos"><button type="button" class="btn btn-warning"><strong>Inscreva-se</strong></button></a></div>'
    $.get("/statusmini", function (data) {
      if(data != ""){
        $("#cursos").html(" ");
     
       for(let i in data){
        $("#cursos").append(" - " + `${data[i]}`+"<br>")
       }  
      }else{
        $("#cursos").html(html);
      }
    });
  })
