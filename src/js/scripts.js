$(document).ready(function () {

    //инициализация плагина от http://dimox.name/jquery-form-styler/
    (function ($) {
        $(function () {
            $('.currency-select').styler({
                selectSmartPositioning: false
            });
        });
    })(jQuery);

    $('.nav-area-search,.searching-area-close').on('click', function () {
        $('.searching-area,.searching-area-input').toggleClass("searching-open").focus();
        $('.nav-area-search').toggleClass("active");
        $('.nav-area-search').removeClass("search-results-show");

    });

    $('.searching-area-input').keyup(function () {
        $('.search-results').addClass('search-results-show');
    });
});
