$(document).ready(function () {

    // Initializing plugin  http://dimox.name/jquery-form-styler/
    (function ($) {
        $(function () {
            $('.currency-select').styler({
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
        navText: ['<svg class="left-arrow" viewBox="0 0 46.02 92.06"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#left-arrow"></use></svg>',
            '<svg class="right-arrow" viewBox="0 0 45.98 91.99"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#right-arrow"></use></svg>']
    });

    // Different events
    $('.nav-area-search,.search-area-close').on('click', function () {
        $('.search-area,.search-area-input').toggleClass("search-area-open").focus();
        $('.nav-area-search').toggleClass("active");
        $('.nav-area-search').removeClass("search-results-show");

    });

    $('.search-area-input').keyup(function () {
        $('.search-results').addClass('search-results-show');
    });
});
