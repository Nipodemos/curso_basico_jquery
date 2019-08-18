// $(seletor).ação();
$(function () {
    $('#azul').click(() => {
        $('p').css("color", "blue");
    });

    $('#vermelho').click(() => {
        $('p').css("color", "red");
    });
})