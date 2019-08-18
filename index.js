// $(seletor).ação();
$(function () {
    $('#azul').click(() => {
        $('p').css("color", "blue");
        $('p').fadeOut('fast');
        $('p').delay(2000);
        $('p').fadeIn();
    });

    $('#vermelho').click(() => {
        $('p').css("color", "red");
        $('#mensagem').text("Cor alterada com sucesso");
        $('#mensagem').css('color', 'red');
        $('#mensagem').css('border', '1px solid red');
        $('#mensagem').delay(3000);
        $('#mensagem').fadeOut();
    });
})