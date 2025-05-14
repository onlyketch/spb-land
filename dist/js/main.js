document.addEventListener('DOMContentLoaded', function() {

    /* Фиксация header */

    const sectionDataPos = $('#data-section').offset().top - 250;
    const sectionAboutPos = $('#about').offset().top - 380;
    const sectionLocationPos = $('#location').offset().top - 380;
    const sectionMainFeaturesPos = $('#main-features').offset().top - 380;
    const sectionFeaturesPos = $('#features').offset().top - 380;
    const sectionVacanciesPos = $('#vacancies-box').offset().top - 2400;
    const header = document.querySelector('.header');
    const headerNavLinkAbout = document.getElementById('nav-about');
    const headerNavLinkLocation = document.getElementById('nav-location');
    const headerNavLinkMainFeatures = document.getElementById('nav-main-features');
    const headerNavLinkFeatures = document.getElementById('nav-features');
    const headerNavLinkVacancies = document.getElementById('nav-vacancies');
    const headerNavLinks = document.querySelectorAll('.header__nav-link');

    

   window.addEventListener('scroll', function() {
        if (window.pageYOffset >= sectionDataPos) {
            if (!header.classList.contains('fix')) {
                header.classList.add('fix');
            }
            
        } else {
            if (header.classList.contains('fix')) {
                header.classList.remove('fix');
                
                headerNavLinks.forEach(link => {
                    if (link.classList.contains('active')) link.classList.remove('active');
                });
            }
        }

        if (window.pageYOffset >= sectionAboutPos) {
            headerNavLinks.forEach(link => {
                if (link.classList.contains('active')) link.classList.remove('active');
            });
           
            headerNavLinkAbout.classList.add('active'); 
        }

        if (window.pageYOffset >= sectionLocationPos) {
            headerNavLinks.forEach(link => {
                if (link.classList.contains('active')) link.classList.remove('active');
            });
           
            headerNavLinkLocation.classList.add('active'); 
        }

        if (window.pageYOffset >= sectionMainFeaturesPos) {
            headerNavLinks.forEach(link => {
                if (link.classList.contains('active')) link.classList.remove('active');
            });
           
            headerNavLinkMainFeatures.classList.add('active'); 
        }

        if (window.pageYOffset >= sectionFeaturesPos) {
            headerNavLinks.forEach(link => {
                if (link.classList.contains('active')) link.classList.remove('active');
            });
           
            headerNavLinkFeatures.classList.add('active'); 
        }

        console.log(sectionVacanciesPos);
        console.log(window.pageYOffset);

        if (window.pageYOffset >= sectionVacanciesPos) {
            headerNavLinks.forEach(link => {
                if (link.classList.contains('active')) link.classList.remove('active');
            });
            
            headerNavLinkVacancies.classList.add('active'); 
        }
    });
    
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

    // Кнопки «Наверх»

    let btnUp = document.querySelector('.footer__up-btn');
    let monBtnUp = document.querySelector('.footer__mob-up-btn');

    btnUp.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    monBtnUp.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

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
        document.documentElement.classList.add('popup-open-for-html');
        headerContainer.classList.add('fix-move');
    }

    function unlockBody() {
        document.body.classList.remove('popup-open');
        document.documentElement.classList.remove('popup-open-for-html');
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

    // MODAL SUCCESS
    let modalSuccess = document.querySelector('.modal-success');
    let modalSuccessOverlay = document.querySelector('.modal-success__overlay');
    let modalSuccessBody = document.querySelector('.modal-success__body');
    let modalSuccessClose = document.querySelector('.modal-success__body-close');

    function successOpen() {
        modalSuccess.classList.add('open');
        modalSuccessOverlay.classList.add('show');
        modalSuccessBody.classList.add('open');
    }

    modalSuccessClose.addEventListener('click', function() {
        modalSuccessBody.classList.remove('open');
        setTimeout(function() {
            modalSuccessOverlay.classList.remove('show');
            modalSuccess.classList.remove('open');
            unlockBody();
        }, 400);
    });



    // MODAL SUBMIT, VALIDATION

    let modalForm = document.querySelector('.callback-popup__form');
    let modalFormGroup = document.querySelector('.callback-popup__form-group');
    let modalPhoneInput = document.querySelector('.callback-popup__form-input');
    let modalFormAnimation = document.querySelector('.callback-popup__body-send-animation');
    let modalFormHaveErrors = false;

    // validate

    function formErrorsCheck() {
        if (modalPhoneInput.value == '' || modalPhoneInput.value.length < 16) {
            modalFormGroup.classList.add('error');
            modalFormHaveErrors = true;
        }
    }

    // fix error

    modalPhoneInput.addEventListener('input', function() {
        if (modalFormHaveErrors) {
            if (modalPhoneInput.value.length == 16) {
                modalFormGroup.classList.remove('error');
                modalFormHaveErrors = false;
            }
        }
    });

    // submit

    modalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formErrorsCheck();

        if (modalFormHaveErrors == false) {
            modalFormAnimation.classList.add('visible');
            let form_data = $(this).serialize();

            $.ajax({
                // type: "POST", 
                // url: "/form/",
                // dataType: "json",
                type: "GET",
                url: "/",
                //dataType: "json",
                data: form_data,
                success: function() {
                    setTimeout(function() {
                        modalFormAnimation.classList.remove('visible');
                        popUpBody.classList.remove('open');
                        popUpOverlay.classList.remove('show');
                        popUp.classList.remove('open');
                        successOpen();
                    }, 600);
                },
                complete: function() {
                    setTimeout(function() {
                        modalFormAnimation.classList.remove('visible');
                    }, 600);
                }
            });
        }
    });

    // FORM SUBMIT, VALIDATION

    let pageForm = document.querySelector('.vacancies__offer-form');
    let pagePhoneInput = document.querySelector('.vacancies__offer-form-input');
    let pageFormHaveErrors = false;

    // validate

    function pageFormErrorsCheck() {
        if (pagePhoneInput.value == '' || pagePhoneInput.value.length < 16) {
            pageFormHaveErrors = true;
        }
    }

    // fix error

    pagePhoneInput.addEventListener('input', function() {
        if (pageFormHaveErrors) {
            if (pagePhoneInput.value.length == 16) {
                pageFormHaveErrors = false;
            }
        }
    });

    // submit

    pageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        pageFormErrorsCheck();

        if (pageFormHaveErrors == false) {
            let form_data = $(this).serialize();

            $.ajax({
                // type: "POST", 
                // url: "/form/",
                // dataType: "json",
                type: "GET",
                url: "/",
                //dataType: "json",
                data: form_data,
                success: function() {
                    lockBody();
                    setTimeout(function() {
                        successOpen();
                    }, 400);
                }
            });
        }
    });



    
    





});