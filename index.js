// $(seletor).ação();
$(function () {
    $('#azul').click(() => {

        $('p')
            .css("color", "blue")
            .fadeOut('fast')
            .delay(2000)
            .fadeIn();
    });

    $('#vermelho').click(() => {
        $('p').css("color", "red");

        $('#mensagem')
            .text("Cor alterada com sucesso")
            .css({ color: 'red', border: '1px solid red', backgroundColor: '#f08080' })
            .delay(3000)
            .fadeOut();
    });
})