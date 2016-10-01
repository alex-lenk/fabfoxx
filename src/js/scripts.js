// var itemGrid = $('.item-grid'),
//     movingPanel = $('.moving-panel'),
//     point = $('.point'),
//     bg = $('.bg');

(function ($) {
    $(function () {
        $('ul.nav-tabs').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
    });
})(jQuery);

$(document).ready(function () {

    $("#owl-demo2").owlCarousel({
        stopOnHover: true,
        lazyLoad: true,
        transitionStyle: "fade",
        autoPlay: 5000,
        slideSpeed: 1000,
        pagination: false,
        singleItem: true,
        mouseDrag: false
    });

    $("#contacts-slider").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });


    $('.bg').css('height', $(document).height() + 'px');
    $('.tab-block').css('height', $(window).height());
    $('.table-container').css('height', $(window).height() - 50 + 'px');
    var k, massiveOftables = [];
    var numbOftab;
    var tabId;

    $('.music-button,.music-player-hide').on('click', function () {
        $('.music-player').toggleClass("music-player-open");
    });

    $('.play-social-nav .fork').on('click', function () {
        $('.play-social-nav .social').toggleClass("share-open");
    });

    $('.play-video-post').on('click', function () {
        $('.youtube-player').addClass("show-youtube-player");
        $('.play-video-post, .play-social-nav .count-video').hide();
    });


//Выезжающие панели
    $('.point').on('click', function () {
        var i = 6;
        var id = $(this).attr('data-id');
        var index = $(this).attr('data-index');
        var h1Width, contHeight;

        $('.calendar-show').addClass("calendar-hide");


        $('.moving-panel').css({
            //'display': 'none',
            'left': '-120%'
        });
        $('.bg').removeClass('blur');
        while (i--) {
            if (index <= i) {
                $('[data-index="' + i + '"]').addClass('blur');
            } else break;
        }
        $(id).css('display', 'block');
        setTimeout(function () {
            $(id).css('left', '-60px');
            h1Width = $(id).find('h2').css('width');
            $('.hr').css('width', 'calc(100% - ' + h1Width + ')');
            contHeight = $(id).find('.content').height();
            //$('.content').css('margin-left', (contHeight / 10) + 'px');

            //записываем высоту таблиц, заносим в массив
            var active = $(id).find('.tab.active').attr('data-id');
            tabId = active;
            $(active).css('display', 'block');
            numbOftab = $(active).find('.drop-nav ul, tr th').children().length;
            if (numbOftab) {
                k = numbOftab;
                while (k) {
                    $(tabId).find('[data-n="' + k + '"]').css({
                        'height': 'auto'
                    });
                    $(tabId).find('[data-n="' + k + '"]').css({
                        'height': $(tabId).find('[data-n="' + k + '"]').height() + 'px'
                    });
                    massiveOftables[k] = $(tabId).find('[data-n="' + k + '"]').css('height');

                    k--;
                }
            }
        }, 50);

        $('.drop-nav li').removeClass('active');
        $('.drop-nav li:first-child').addClass('active');
        $('.drop-tab').removeClass('active');
        $('.drop-tab:first-child').addClass('active');
        $('.bg').addClass('blur');
    });

//Закрыть панель
    $('.close').on('click', function () {

        $('.calendar-show').toggleClass("calendar-hide");

        var i = 6;
        $('.point').attr('data-cur', '0');
        $('.moving-panel').css('left', '-120%');
        setTimeout(function () {
            $('.moving-panel').css('display', 'none');
        }, 500);
        $('.bg').removeClass('blur');
        $('.point').removeClass('blur');

        // обнуляем все табы
        $('.tab').removeClass('active');
        $('.tab:first-of-type').addClass('active');
        $('.tab-block').css('display', 'none');
        $('.drop-nav li').removeClass('active');
        $('.drop-nav li:first-of-type').addClass('active');
        k = massiveOftables.length;
        while (k--) {
            $('[data-n="' + k + '"]').css({
                'height': massiveOftables[k]
            });
        }
        while (i--) {
            $('#p' + i + 'c1').css('display', 'block');
        }
    });

//Изменение размера браузерного окна
    $(window).on('resize', function () {
        $('.bg').css('height', $(window).height() + 'px');
        $('.tab-block').css('height', $(window).height() - 100 + 'px');
        $('.table-container').css('height', $(window).height() - 100 + 'px');
    });

//вкладки с контентом
    $('.tab').on('click', function () {
        $('.tab').removeClass('active');
        $(this).addClass('active');
        tabId = $(this).attr('data-id');
        $('.tab-block').css('display', 'none');
        $(tabId).css('display', 'block');
        //
        //таблицы, обнуление таблиц
        numbOftab = $(tabId).find('.drop-nav ul').children().length;
        if (numbOftab) {
            k = numbOftab;
            while (k) {
                $(tabId).find('[data-n="' + k + '"]').css({
                    'height': 'auto'
                });
                $(tabId).find('[data-n="' + k + '"]').css({
                    'height': $(tabId).find('[data-n="' + k + '"]').height() + 'px'
                });
                massiveOftables[k] = $(tabId).find('[data-n="' + k + '"]').css('height');

                k--;
            }
        }
        $('.drop-nav li').removeClass('active');
        $('.drop-nav li:first-child').addClass('active');
        $('.drop-tab').removeClass('active');
        $('.drop-tab:first-child').addClass('active');
    });


//таблицы
    $('.drop-nav li').on('click', function () {
        var id = $(this).attr('data-id');
        var i = 1, n = $(id).attr('data-n');
        k = numbOftab;
        while (k) {
            $(tabId).find('[data-n="' + k + '"]').css({
                'height': massiveOftables[k]
            });
            k--;
        }
        while (n > i) {
            $(tabId).find('[data-n="' + i + '"]').css('height', '35px');
            i++;
        }
        $('.drop-nav li').removeClass('active');
        $(this).addClass('active');
        $('.drop-tab').removeClass('active');
        $(id).addClass('active');
    });


//Слайдер
//     setInterval(function () {
//         slide();
//     }, 10000);
//     function slide() {
//         var sliderBody = $('.slider');
//         var current = sliderBody.attr('data-current');
//         var last = sliderBody.children().last().attr('data-number');
//         sliderBody.append(sliderBody.children().first().clone());
//         sliderBody.find('[data-number="' + current + '"]').css({
//             'opacity': '0'
//         });
//         sliderBody.children().last().attr('data-number', +last + 1);
//         current++;
//         sliderBody.find('[data-number="' + current + '"]').css({
//             'opacity': '1'
//         });
//         sliderBody.attr('data-current', current);
//         setTimeout(function () {
//             $('.slider').children().first().remove();
//         }, 700);
//     }


//CustomScrollbar
    var scroll = $(".music-player-wrap,.table-container,.item-grid,.music-player");

    scroll.mCustomScrollbar({
        theme: 'minimal'
    });

    $(".scroll-container,.wrapper").mCustomScrollbar({
        theme: 'minimal'
    });

// online-shop
    $('.item-grid-info').on('click', function () {
        $('.overlay').css('display', 'block');
        setTimeout(function () {
            $('.overlay').css('background-color', 'rgba(0,0,0,0.6)');
        }, 50);
        $('.open-card').css('display', 'block');
        $('.moving-panel').addClass('blur');
        $('.music').addClass('blur');
        $('.point').addClass('blur');
        $('.main-footer').addClass('blur');
        $('[name="card-photo"]').prop('checked', 'false');
        $('[name="card-photo"]:first-of-type').prop('checked', 'true');
    });
    $('.overlay').on('click', function () {
        $('.overlay').css('background-color', 'rgba(0,0,0,0)');
        setTimeout(function () {
            $('.overlay').css('display', 'none');
        }, 300);
        $('.open-card').css('display', 'none');
        $('.moving-panel').removeClass('blur');
        $('.music').removeClass('blur');
        $('.point').removeClass('blur');
        $('.main-footer').removeClass('blur');
    });
    $('.card-close').on('click', function () {
        $('.overlay').trigger('click');
    });

    //photo-slider
    var owl = $("#owl-demo");
    owl.owlCarousel({
        pagination: false,
        items: 7,
        itemsDesktop: [1300, 5],
        itemsDesktopSmall: [1024, 4],
        itemsTablet: [850, 3],
        itemsMobile: [700, 2]
    });
    $('.arrow-next').click(function () {
        owl.trigger('owl.next');
    });
    $('.arrow-prev').click(function () {
        owl.trigger('owl.prev');
    });

    $('.photo-slide').on('click', function () {
        var id = $(this).attr('id');
        $('.main-image').removeClass('now');
        $('.photo-slide').removeClass('now');
        $(this).addClass('now');
        $('[data-id="' + id + '"]').addClass('now');

    });


    /* ~ ~ ~ MODAL-WINDOW (21.09.16) ~ ~ ~ */
    $('.modal-window').on('show', function () {
        $('.moving-panel').addClass('blur');
        $('.music').addClass('blur');
        $('.point').addClass('blur');
        $('.main-footer').addClass('blur');
        $('.overlay').css('display', 'block');
        setTimeout(function () {
            $('.overlay').css('background-color', 'rgba(0,0,0,0.6)');
        }, 50);
    });
    $('.overlay').on('click', function () {
        $('.overlay').css('background-color', 'rgba(0,0,0,0)');
        setTimeout(function () {
            $('.overlay').css('display', 'none');
        }, 300);
        $('.modal-window').css('display', 'none');
        $('.moving-panel').removeClass('blur');
        $('.music').removeClass('blur');
        $('.point').removeClass('blur');
        $('.main-footer').removeClass('blur');
        $('.pay-cont').css('display', 'block');
        $('.order-cont').css('display', 'none');
    });
    $('.card-close').on('click', function () {
        $('.overlay').trigger('click');
    });

// online-shop
    $('.shop-grid .item').on('click', function () {
        $('.open-card').css('display', 'block');
        $('[name="card-photo"]').prop('checked', 'false');
        $('[name="card-photo"]:first-of-type').prop('checked', 'true');
        $('.modal-window').trigger('show');

    });

    $('.basket').on('click', function () {
        $('.basket-card').css('display', 'block');
        $('.modal-window').trigger('show');
    });
    $('.checkout').on('click', function () {
        $('.pay-cont').css('display', 'none');
        $('.order-cont').css('display', 'block');
    });
    /* ~ ~ ~ END OF MODAL-WINDOW (21.09.16) ~ ~ ~ */


    // Инициализация плагина http://isotope.metafizzy.co/
    $('.favorites-content').isotope({
        itemSelector: '.favorites-content li'
    });

    $('#filter li').click(function () {
        $('#filter li').removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');

        $('.favorites-content').isotope({
            filter: selector,
            animationOptions: {
                duration: 1000,
                easing: 'easeOutQuart',
                queue: false
            }
        });
        return false;
    });

    //инициализация плагина от http://dimox.name/jquery-form-styler/
    (function ($) {
        $(function () {

            $('.feedback-select').styler();

        });
    })(jQuery);

    $('.custom1').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsiveClass: true,
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

    });
});
