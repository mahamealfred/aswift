//Utility Scripting references - @Gilbert & Claude

jQuery(function ($) {
    'use strict';
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) {
            $('.appbar-area').addClass('is-sticky');
            $(".fixed-top").addClass("non-fixed");
        } else {
            $('.appbar-area').removeClass('is-sticky');
            $(".fixed-top").removeClass("non-fixed");
        }
    });
    const displays = document.querySelectorAll('.circular-progress');
    const transitionDuration = 900;
    displays.forEach(display => {
        let note = Math.round(display.dataset.note);
        let [int] = display.dataset.note.split('.');
        [int] = [Number(int)];
        strokeTransition(display, note);
        increaseNumber(display, int, 'int');
    });

    function strokeTransition(display, note) {
        let progress = display.querySelector('.circle-progress-fill');
        let radius = progress.r.baseVal.value;
        let circumference = 2 * Math.PI * radius;
        let offset = circumference * (100 - note) / 100;
        progress.style.setProperty('--initialStroke', circumference);
        progress.style.setProperty('--transitionDuration', `${transitionDuration}ms`);
        setTimeout(() => progress.style.strokeDashoffset = offset, 100);
    }


    function increaseNumber(display, number, className) {
        let element = display.querySelector(`.percent-${className}`),
            decPoint = className === 'int' ? '' : '',
            interval = transitionDuration / number,
            counter = 0;
        let increaseInterval = setInterval(() => {
            if (counter === number) {
                window.clearInterval(increaseInterval);
            }
            element.textContent = counter + decPoint;
            counter++;
        }, interval);
    }
    $("body").addClass("pre-loaded");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $("#scrolltop").addClass("scrolltopactive");
        } else {
            $("#scrolltop").removeClass("scrolltopactive");
        }
    });
    $("#scrolltop").on('click', function () {
        $("html").animate({
            scrollTop: 0
        }, 2000);
        return false;
    });
    $('.back-page').on("click", function () {
        history.go(-1);
        return false;
    });
    $(".blog-grid-item").slice(0, 6).show();
    $(".load-more-btn").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".blog-section").find(".blog-grid-item:hidden").slice(0, 3).slideDown();
    })

    $(".tab-selector-list li").on("click", "button", function () {
        var self = $(this).parent("li");
        var self_tab = self.attr("data-tab-list");
        self.addClass("active").siblings().removeClass("active");
        $(".tab-selector-details-item[data-tab-details= " + self_tab + "]").addClass("active").siblings().removeClass("active");
    })
    $(".setting-toggle-btn").on("click", "button", function () {
        $(this).toggleClass("active");
    })
    var body = $('body');

    function goToNextInput(e) {
        var key = e.which,
            t = $(e.target),
            sib = t.next('input');
        if (key != 9 && (key < 48 || key > 57)) {
            e.preventDefault();
            return false;
        }
        if (key === 9) {
            return true;
        }
        if (!sib || !sib.length) {
            sib = body.find(".verification-input").eq(0);
        }
        sib.select().focus();
    }

    function onKeyDown(e) {
        var key = e.which;
        if (key === 9 || (key >= 48 && key <= 57)) {
            return true;
        }
        e.preventDefault();
        return false;
    }

    function onFocus(e) {
        $(e.target).select();
    }
    body.on('keyup', ".verification-input", goToNextInput);
    body.on('keydown', ".verification-input", onKeyDown);
    body.on('click', ".verification-input", onFocus);
    $(".input-group-text.reveal").on('click', function () {
        var $password = $(this).siblings(".password");
        $(this).toggleClass("active");
        if ($password.attr('type') === "password") {
            $password.attr('type', 'text');
        } else {
            $password.attr('type', "password");
        }
    })
    $(".basic-carousel").owlCarousel({
        loop: true,
        items: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        nav: true,
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow-angle"></i>'],
        dots: false,
        margin: 10
    });
    $(".stage-padding-carousel").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        nav: true,
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow-angle"></i>'],
        dots: false,
        margin: 10,
        stagePadding: 50,
    });
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    $(".search-animate-form").on("click", "button", function () {
        $(this).parent(".search-animate-form").toggleClass("active");
        if ($(this).parent(".search-animate-form").hasClass("active")) {
            $(this).siblings("input").val()
        } else {
            $(this).siblings("input").val('');
        }
    })
    $("#contactForm, .newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            event.preventDefault();
        }
    });

    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }

    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function () {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }

    function formErrorSub() {
        $(".newsletter-form").addClass("animate__animated animate__shakeX");
        setTimeout(function () {
            $(".newsletter-form").removeClass("animate__animated animate__shakeX");
        }, 1000)
    }

    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    $(".newsletter-form").ajaxChimp({
        url: "https://hibootstrap.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
        callback: callbackFunction
    });
});