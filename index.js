// $(seletor).ação();
$(function () {
    $('#azul').click(() => {
        $('p').css("color", "blue");
        $('p').fadeOut();
        $('p').delay(2000);
        $('p').fadeIn();
    });

    $('#vermelho').click(() => {
        $('p').css("color", "red");
        $('p').fadeOut('slow');
        $('p').delay(2000);
        $('p').fadeIn('slow');
    });
})