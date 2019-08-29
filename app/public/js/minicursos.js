$(document).ready(function () {
  $.get("/statuscursos", function (data) {

    escrita = 25 - data.escrita;
    $("#escrital").html(escrita);
    if (escrita <= 0) { $("#escrita").prop("disabled", true); } else { $("#escrita").prop("disabled", false); }

    python = 20 - data.python;
    $("#pythonl").html(python);
    if (python <= 0) { $("#python").prop("disabled", true); } else { $("#python").prop("disabled", false); }

    javascript = 30 - data.javascript;
    $("#javascriptl").html(javascript);
    if (javascript <= 0) { $("#javascript").prop("disabled", true); } else { $("#javascript").prop("disabled", false); }

    libras = 25 - data.libras;
    $("#librasl").html(libras);
    if (libras <= 0) { $("#libras").prop("disabled", true); } else { $("#libras").prop("disabled", false); }

    scrum = 30 - data.scrum;
    $("#scruml").html(scrum);
    if (scrum <= 0) { $("#scrum").prop("disabled", true); } else { $("#scrum").prop("disabled", false); }

    bigdata = 30 - data.bigdata;
    $("#bigdatal").html(bigdata);
    if (bigdata <= 0) { $("#bigdata").prop("disabled", true); } else { $("#bigdata").prop("disabled", false); }

    si = 30 - data.si;
    $("#sil").html(si);
    if (si <= 0) { $("#si").prop("disabled", true); } else { $("#si").prop("disabled", false); }

    robotica = 30 - data.robotica;
    $("#robotical").html(robotica);
    if (robotica <= 0) { $("#robotica").prop("disabled", true); } else { $("#robotica").prop("disabled", false); }

  });
});