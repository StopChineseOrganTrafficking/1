$(document).ready(function() {
    $('.tab').mouseenter(function() {
        $(this).css('color', 'red');
    });
    $('.tab').mouseleave(function() {
        $(this).css('color', 'black');
    });
    $('#info').click(function() {
        $('#content').html('<p>Organ Trafficking in China is a multi -million dollar busniness. Although it might generate lots of money for Chins, it is exremely creul and harmful to everyone.</p>');
        updates on this project.');
        $('#tab_h2').text('Info');
        $('title').text('Info'); 
    });
    $('#contact').click(function() {
        $('#content').html('<p>Email : ungoal16@gmail.com</p>');
        $('#tab_h2').html('Contact Us');
        $('title').text('Contact Us');
    });
    $('#sources').click(function() {
        $('#content').html('<p>This is currently being assembled</p>');
        $('#tab_h2').html('Sources');
        $('title').text('Sources');
    });
});
