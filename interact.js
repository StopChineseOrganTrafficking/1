$(document).ready(function() {
    $('#header').click(function() {
        $('.top').html('<ul><li><a href="#info">Information</a></li><li><a href="#evidence">Evidence</a></li><li><a href="source">Source Of Organs</a></li><li><a href="#help">Support Us</a></li></ul>');
    });
    $('#header').mouseleave(function() {
      $('.top').html('<h1>Stop Chinese Organ Trafficking</h1>');
    });
});