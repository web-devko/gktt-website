const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

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



$('#myselection').on('click', '.j-store', function () {
    var demovalue = $(this).attr('data-value');
    $("div.myDiv").hide();
    $("#show" + demovalue).show();
});




$(".j-store-select").on('click', function () {
    $(this).find('ul').slideToggle();
});



$(window).click(function () {
    
});

$('.j-store').on('click', function () {
    var store = $(this).html();
    $(this).toggleClass('selected');
    $('.j-store').not($(this)).removeClass('selected');
    $('.store-default').html(store).css('color', 'black');
});

$(function () {

    $('.hidden').hide();
    $('.cards-poland').show();

    $('.poland-btn').click(function () {
        $('.hidden').hide();
        $('.cards-poland').show();
    });

    $('.europe-btn').click(function () {
        $('.hidden').hide();
        $('.cards-europe').show();
    });

    $('.asia-btn').click(function () {
        $('.hidden').hide();
        $('.cards-asia').show();
    });

    $('.usa-btn').click(function () {
        $('.hidden').hide();
        $('.cards-usa').show();
    });
});