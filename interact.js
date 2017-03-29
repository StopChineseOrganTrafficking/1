$(document).ready(function() {
    $('.tab').mouseenter(function() {
        $(this).css('color', 'red');
    });
    $('.tab').mouseleave(function() {
        $(this).css('color', 'black');
    });
    $('#info').click(function() {
        $('p').html('This website is being hosted using <a href="https://github.com/" target="_blank">GitHub</a>. This project is being developed just for fun. <br> Subscribe to <a href="https://www.youtube.com/channel/UCWVgMO59hA3vW4OG_p9H6Dg" target="_blank">my YouTube channel</a> for video updates on this project.');
        $('#tab_h2').text('Info');
        $('title').text('1 - Info') 
    });      
    $('#links').click(function() {
        $('p').html('Here are some websites that help me out: <br> <br> <a href="https://github.com/" target="_blank">GitHub</a> <br> <br> <a href="https://www.codecademy.com/learn" target="_blank">codecademy</a> <br> <br> <a href="https://www.w3schools.com/" target="_blank">w3shcools</a> <br> <br> Press collaborate if you want to help out!');
        $('#tab_h2').text('Links');
        $('title').text('1 - Links');
    });
    $('#collab').click(function() {
        $('p').html('Follow me on <a href="https://github.com/KazanPickle" target="_blank">my GitHub profile</a> if you want to help me with this project.');
        $('#tab_h2').html('Collaborate');
        $('title').text('1 - Collab');
    });
    $('#YT').click(function() {
        $('p').html('A video will appear here as soon as one is uploaded.')
        $('#tab_h2').html('YouTube');
        $('title').text('1 - YouTube');
    });
});