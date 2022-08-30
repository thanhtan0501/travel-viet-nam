const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}
// Show Menu
const navLink = document.querySelectorAll('.nav_link');

function clickLink() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', clickLink))


// ANIMATION
const animationImg = document.querySelectorAll('.controls_img');

function scrollAnimation() {
    gsap.from('.home_data-subtitle', { opacity: 0, duration: .2, delay: .2, y: -20 })
    gsap.from('.home_data-title', { opacity: 0, duration: .3, delay: .3, y: -20 })
    gsap.from('.home_data-description', { opacity: 0, duration: .4, delay: .4, y: -20 })
    gsap.from('.home_button', { opacity: 0, duration: .5, delay: .5, y: -20 })
}
animationImg.forEach(n => { n.addEventListener('click', scrollAnimation) });


// Change Header
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 100) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


// Swiper
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,

});
let galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,

    thumbs: {
        swiper: galleryThumbs,
    },
});

let swiper = new Swiper(".explore_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});

let swiper2 = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,

    loopFillGroupWithBlank: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// Video
const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-button');
const videoIcon = document.getElementById('video_button-icon');

function playPause() {
    if (videoFile.paused) {
        videoFile.play();
        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    } else {
        videoFile.pause();
        videoIcon.classList.add('ri-play-line');
        videoIcon.classList.remove('ri-pause-line');
    }
}
videoButton.addEventListener('click', playPause);

function finalVideo() {

    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
}
videoFile.addEventListener('ended', finalVideo);


// Scroll Up
function showScrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 200) scrollUp.classList.add('show_scrollup');
    else scrollUp.classList.remove('show_scrollup');
}
window.addEventListener('scroll', showScrollUp);


// SCROLL REVEAL    
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    // delay: 300,
    // reset: true
})
sr.reveal(`.explore_container,.tour_card,.sponsor_content,.footer_data,.footer_right`, {
    origin: 'top',
    interval: 100,
})
sr.reveal(`.video_description,.subscribe_description,.more`, {
    origin: 'left',
})

sr.reveal(`.video_content,.subscribe_form`, {
    origin: 'right',
    interval: 100,
})


// Login

const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})