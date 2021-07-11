$("#close").click(function() {
    $("#open-card-one").hide();
});

$("#card-one").click(function() {
    $("#open-card-one").show();
});

$("#close-two").click(function() {
    $("#open-card-two").hide();
});

$("#card-two").click(function() {
    $("#open-card-two").show();
});


$("#close-three").click(function() {
    $("#open-card-three").hide();
});

$("#card-three").click(function() {
    $("#open-card-three").show();
});


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




for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.custom-select').classList.toggle('open');
    })
}

window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.cards')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});