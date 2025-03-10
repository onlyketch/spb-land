document.addEventListener('DOMContentLoaded', function() {

    /* Слайдер 1 экран */

    $('.hero__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
        touchThreshold: 50,
        speed: 300
    });


    /* Слайдер особенности */

    let featuresButtonRight = document.querySelector('.slider-control-features > .slider-control-right');
    let featuresButtonLeft = document.querySelector('.slider-control-features > .slider-control-left');

    $('.features__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        touchThreshold: 50,
        speed: 200
    });

    featuresButtonLeft.addEventListener('click', function() {
        $('.features__slider').slick('slickNext');
    });

    featuresButtonRight.addEventListener('click', function() {
        $('.features__slider').slick('slickPrev');
    });

    /* Слайдер вакансии */

    let vacanciesButtonRight = document.querySelector('.slider-control-vacancies > .slider-control-right');
    let vacanciesButtonLeft = document.querySelector('.slider-control-vacancies > .slider-control-left');

    $('.vacancies__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        touchThreshold: 50,
        speed: 200
    });

    vacanciesButtonLeft.addEventListener('click', function() {
        $('.vacancies__slider').slick('slickNext');
    });

    vacanciesButtonRight.addEventListener('click', function() {
        $('.vacancies__slider').slick('slickPrev');
    });

    /* Слайдер о комплексе */

    $('.about__slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.about__slider-controls-counter').text(i + '/' + slick.slideCount);
    });

    let aboutButtonRight = document.querySelector('.about__slider-controls-left');
    let aboutButtonLeft = document.querySelector('.about__slider-controls-right');

    $('.about__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        touchThreshold: 50,
        speed: 200
    });

    aboutButtonLeft.addEventListener('click', function() {
        $('.about__slider').slick('slickNext');
    });

    aboutButtonRight.addEventListener('click', function() {
        $('.about__slider').slick('slickPrev');
    });







});