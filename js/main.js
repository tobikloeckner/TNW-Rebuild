jQuery( document ).ready(function( $ ) {
    var background = $('#background');
    var content = $('#content');

    var randomNr = Math.ceil(Math.random() * 3);

//    var backgroundImgUrl = 'url(img/'+randomNr+'.jpg)';
//    background.css('background-image', backgroundImgUrl);

    var color;
    switch (randomNr) {
      case 1:
        color = 'red';
        break;
      case 2:
        color = 'green';
        break;
      case 3:
        color = 'blue';
    }

    background.css('background-color', color);

    background.click(function() {
        if(!$(this).hasClass('focused')) {
            $(this).addClass('focused');
            content.removeClass('unfocused-hover');
            content.addClass('unfocused', 1000, 'easeInOutQuart');
        }
    });

    content.click(function() {
        if($(this).hasClass('unfocused')) {
            $(this).removeClass('unfocused', 200, 'linear');
            $(this).removeClass('unfocused-hover');
            background.removeClass('focused');
        }
    });

    content.mouseenter(function() {
        if($(this).hasClass('unfocused')) {
            $(this).addClass('unfocused-hover', 200, 'linear');
        }
    });

    content.mouseleave(function() {
        if($(this).hasClass('unfocused')) {
            $(this).removeClass('unfocused-hover', 200, 'linear');
        }
    });

    $(window).scroll(function() {
        if(content.hasClass('unfocused')) {
            content.removeClass('unfocused', 200, 'linear');
            content.removeClass('unfocused-hover');
            background.removeClass('focused');
        }
    });
});//document ready