$(document).ready(function() {
    $('.tab').mouseenter(function() {
        $(this).css('color', 'red');
    });
    $('.tab').mouseleave(function() {
        $(this).css('color', 'black');
    });
    $('#info').click(function() {
        $('#content').html('<p>Organ Trafficking in China is a multi -million dollar busniness. Although it might generate lots of money for China, it is exremely creul and harmful to everyone. Every year, China illegaly carries out over 60,000 organ transplants. Most of these come form people who dont agree with China's political stance, or religon. These people are killed based on their belifs and executed by the government and used for illegal organ transplants.</p>
                        <p>China is showing no signs of stopping this creul practice on innocent people. They have made up fasle claims stateing that they dont use this practice anymore. But many people dissagree with this claim.</p>');
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
