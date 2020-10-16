import $ from 'jquery';
import tabs from 'tabs';

export default function () {
    var container = document.querySelector('.tab-container')
    if (container) {
        $(".js-add-review").on("click", function () {
            $("html, body").animate({
                scrollTop: $(".form").offset().top - 90
            }, 500),
                $(".form input[type=text]").get(0).focus()
        });

        tabs(container);

    }
}