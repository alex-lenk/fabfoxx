$(document).ready(function () {

    // Initializing plugin  http://dimox.name/jquery-form-styler/
    (function ($) {
        $(function () {
            $('.currency-select,.feedback-select,.select-country,.select-method').styler({
                selectSmartPositioning: false
            });
        });
    })(jQuery);

    //  Main slider - initializing plugin owlCarousel
    $('.slider-loop').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        merge: true,
        margin: 0,
        autoHeight: true,
        autoWidth: true,
        nav: true,
        navContainerClass: "slider-loop-nav",
        navText: ['<span class="icon-left"></span>',
            '<span class="icon-right"></span>']
    });

    // owl-carousel - initializing plugin owlCarousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 10,
        margin: 12,
        nav: true,
        pagination: false,
        navContainerClass: "slider-loop-nav",
        navText: ['<span class="icon-left"></span>',
            '<span class="icon-right"></span>']
    });

    // Fixed tag to scroll up
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.to-up').fadeIn(1000);
        } else {
            $('.to-up').fadeOut(1000);
        }
    });

    $(document).scroll(function () {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            $('.to-up').addClass('fix');
        } else {
            $('.to-up').removeClass('fix');
        }
    });

    // Smooth scrolling on the page
    $(function () {
        $('.to-up').on('click', function (e) {
            $('html,body').stop().animate({scrollTop: $('#to-top').offset().top}, 1000);
            e.preventDefault();
        });
    });

    //Blocks with a "floating" fixation
    $(function () {
        var fixBlock = $('.fixed-block-top');
        var fixblock_height = fixBlock.height(); // определяем высоты фиксированного блока
        var fixblock_pos = fixBlock.position().top;
        // определяем его первоначальное положение
        $(window).scroll(function () {
            if ($(window).scrollTop() > fixblock_pos) { // Если страницу прокрутили дальше, чем находится наш блок
                fixBlock.addClass('fixed-block-active'); // То мы этот блок фиксируем и отображаем сверху.
                $('.top-panel').css('margin-bottom', fixblock_height + 'px'); // А чтобы это было плавно, добавляем отсуп снизу для верхнего блока (как будто этот блок там все еще есть)
            } else {  // Если же позиция скрола меньше (выше), чем наш блок
                fixBlock.removeClass('fixed-block-active'); // то возвращаем все назад
                $('.top-panel').css('margin-bottom', '0px'); // И убираем отступ
            }
        })
    });


    // Different events
    const mainMenuSearch = $('.main-menu-search');
    $('.main-menu-search,.search-area-close').on('click', function () {
        $('.search-area,.search-area-input').toggleClass("search-area-open").focus();
        mainMenuSearch.toggleClass("active");
        mainMenuSearch.removeClass("search-results-show");
    });

    $('.search-area-input').keyup(function () {
        $('.search-results').addClass('search-results-show');
    });

    $(".catalog-show-more").hover(function () {
        $('.home-catalog-image').toggleClass("home-catalog-image-zoom");
    });

    $('.start-shopping').on('click', function () {
        $('.first-screen').hide();
    });

    const topiconMenu = $('.top-icon-menu');
    topiconMenu.on('click', function () {
        $('.top-panel').toggleClass("top-panel-open");
        $('body').toggleClass("nav-area-open");
        topiconMenu.toggleClass("icon-left burger-menu");
    });

    $('.social-share').on('click', function () {
        $('.nav-second').toggleClass("share-open");
    });

    $('.search-by-filter,.filter-group-close').on('click', function () {
        $('.filter-group').toggleClass("filter-group-open");
    });

    $('.profile-nav-menu__icon-menu').on('click', function () {
        $('.profile-nav-menu').toggleClass("profile-nav-menu__open");
    });

    $('.terms-item-link').on('click', function (e) {
        $('.sidebar-nav').find('.terms-item-link').removeClass('active-link');
        $(this).toggleClass('active-link').prevAll('.terms-item-link').removeClass('active-link');
    });

});
