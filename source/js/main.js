document.addEventListener('DOMContentLoaded', function() {
    
    /* Маски для инпутов с телефонами */

    const vacanciesInputPhone = document.getElementById('phone');
    const modalInputPhone = document.getElementById('callback-phone');

    const maskOptions = {
        mask: '+{7} 000 000-00-00'
    };

    const vacanciesMask = IMask(vacanciesInputPhone, maskOptions);
    const modalMask = IMask(modalInputPhone, maskOptions);

    vacanciesInputPhone.addEventListener('focus', function() {
        vacanciesMask.value = '+7 ';
    });

    modalInputPhone.addEventListener('focus', function() {
        modalMask.value = '+7 ';
    });

    /* Слайдер 1 экран */

    $('.hero__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
        draggable: false,
        speed: 300
    });

    /* Мобильный слайдер */

    if ($('.mobile-slider ') !== null) {

        $('.mobile-slider ').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            dots: true,
            draggable: false,
            speed: 300
        });

    }

    /* Слайдер особенности */

    let featuresButtonRight = document.querySelector('.slider-control-features > .slider-control-right');
    let featuresButtonLeft = document.querySelector('.slider-control-features > .slider-control-left');

    $('.features__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        touchThreshold: 50,
        speed: 200,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
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
        speed: 200,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
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

    /* popUp Заказать звонок */

    let popUp = document.querySelector('.callback-popup'),
        popUpOverlay = document.querySelector('.callback-popup__overlay'),
        popUpBody = document.querySelector('.callback-popup__body'),
        popUpBodyCloseBtn = document.querySelector('.callback-popup__body-close'),
        callbackBtn = document.querySelector('.callback'),
        headerContainer = document.querySelector('.header > .container');
    
    function lockBody() {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
        document.body.classList.add('popup-open');
        headerContainer.classList.add('fix-move');
    }

    function unlockBody() {
        document.body.classList.remove('popup-open');
        document.documentElement.style.removeProperty('--scrollbar-width');
        headerContainer.classList.remove('fix-move');
    }
    
    callbackBtn.addEventListener('click', function() {
        lockBody();
        popUp.classList.add('open');
        popUpOverlay.classList.add('show');
        popUpBody.classList.add('open');
    });

    popUpBodyCloseBtn.addEventListener('click', function() {
        popUpBody.classList.remove('open');
        setTimeout(function() {
            popUpOverlay.classList.remove('show');
            popUp.classList.remove('open');
            unlockBody();
        }, 400);
    });
    





});