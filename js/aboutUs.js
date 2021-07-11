$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})



$('.owl-carousel-2').owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    autoWidth: true,
    // center: true,
    responsive: {
        0: {
            items: 1,
        },
        1000: {
            items: 3,
            autoWidth: false,
        },
        1400: {
            items: 4,
            autoWidth: false,
        }
    }
})

$('div.time-slidecontent').hide();
$('.time-slide').bind('mouseover', function() {
    $('div.time-slidecontent').fadeOut();
    $('#' + $(this).attr('id') + 'content').fadeIn();
});