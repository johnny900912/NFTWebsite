$(document).ready(function () {
    $('#dashboard').mouseenter(function () {
        $(this).stop().animate({
            left: '0px',
            backgroundColor: '#CA8EFF'
            //background-color
        }, 1000, 'easeInSine');
    }, function () {
        $(this).stop().animate({
            left: '-170px',
            backgroundColor: '#4B0091'
            //background-color
        }, 1000, 'easeOutSine', function () {
            $('.main').effect('slide', { direction: 'up' }, 400);
        });
    });
}); 