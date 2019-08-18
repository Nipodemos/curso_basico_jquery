// $(seletor).ação();
$(function () {
    $('#link1').click(() => {
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
    });
    $('#link2').click(() => {
        $('#i1').hide();
        $('#i2').show();
        $('#i3').hide();
        $('#i4').hide();
    });
    $('#link3').click(() => {
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();
        $('#i4').hide();
    });
    $('#link4').click(() => {
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').show();
    });
})