function buscacpf() {
  let id = document.getElementById("cpf").value;
  $('#tabela').html('');
  $.get(`/getdate${id}`, function (data) {
    for (let i in data) {
      pago=['','Pagar','btn-success', ''];
      if (data[i].pagamento == "Pago") { pago[0]='disabled';pago[1]='Já Pagou';pago[2]='btn-secundary'}
      html =
        '<tr><th scope="row"><small>' +
        data[i].name +
        "</small></td><td><small>" +
        data[i].telefone +
        '</small></td><td><button type="submit" onclick="pagar(' +
        data[i].id +
        ')" class="btn ' + pago[2] +' verde sem-borda"' + pago[0] +'>'+pago[1]+'</button></td></tr>';
      $("#tabela").append(html);
    }
  });

};

function pagar(id) {
  $.get(`/update${id}`)
    .done(function (msg) {
      window.location.href = "/admin"
      alert(msg)
    })
    .fail(function (msg) {
      alert(`Erro ao registrar, tente novamente.
          Se persistir o erro entre em contato com o suporte`)
    })
}


$(document).ready(function () {
  $.get("/lista", function (data) {
    for (let i in data) {
      pago=['','Pagar','btn-success', ''];
      if (data[i].pagamento == "Pago") { pago[0]='disabled';pago[1]='Já Pagou';pago[2]='btn-secundary'}
      html =
        '<tr><th scope="row"><small>' +
        data[i].name +
        "</small></td><td><small>" +
        data[i].telefone +
        '</small></td><td><button type="submit" onclick="pagar(' +
        data[i].id +
        ')" class="btn ' + pago[2] +' verde sem-borda"' + pago[0] +'>'+pago[1]+'</button></td></tr>';
      $("#tabela").append(html);
    }

  });
})