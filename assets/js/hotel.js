let tourContainer = window.innerWidth;
console.log(`${tourContainer}`);
var swiper3 = new Swiper(".mySwiper1", {
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 1,

    loopFillGroupWithBlank: true,

    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20
        }
    },
});

/* =======MENU TAB==============*/
const menuBtn = document.querySelectorAll(".btn-menu");
const menuItem = document.querySelectorAll(".menu-item");
const list = document.querySelector(".menu-container__list");
// const menuLink = document.querySelectorAll(".menu-link");

menuItem.forEach((item) => {
    item.classList.add("active-food");
});

menuBtn.forEach((item) =>
    item.addEventListener("click", function(e) {
        menuBtn.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");

        const tabNumber = e.currentTarget.dataset.local;
        menuItem.forEach((item) => {
            item.classList.remove("active-food");

            if (tabNumber === "1") {
                item.classList.add("active-food");
            }

            if (item.getAttribute("data-local") === tabNumber) {
                item.classList.add("active-food");
            }
        });
    })
);


$(document).ready(function() {
    $(".heart_item").click(function() {
        $(this).toggleClass("ri-heart-fill")
    })
})
const heartButton = document.getElementById('heart-icon')