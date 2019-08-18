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
        $('p').fadeOut(3000);
        $('p').fadeIn(5000);
    });
})