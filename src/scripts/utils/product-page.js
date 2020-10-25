import $ from 'jquery'
import tabs from 'tabs'
import Frdialogmodal from 'fr-dialogmodal'
// import 'fr-dialogmodal/dialogmodal.css';

export default function () {
    const container = document.querySelector(`.tab-container`)
    const myModal = Frdialogmodal({
        selector: `.modal`,
        modalSelector: `.modal__window`,
        openSelector: `.modal-open`,
        closeSelector: `.modal__close`,
        readyClass: `modal--is-ready`,
        activeClass: `modal--is-active`
    })
    if (container) {
        $(`.js-add-review`).on(`click`, function () {
            $(`html, body`).animate({
                scrollTop: $(`.form`).offset().top - 90
            }, 500),
            $(`.form input[type=text]`).get(0).focus()
        })

        tabs(container)

    }
}
