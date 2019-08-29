$(document).ready(function () {
    $(".pagina").css('margin-bottom' , $(".navbar").height())
    $(".home .conteudo section").css('height' , ($(window).height() - $(".navbar").height() ) /3)
});
