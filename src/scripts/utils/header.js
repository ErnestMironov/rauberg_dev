export default function header() {
    (function () {
        const btn = document.querySelector(`.search-box`),
            input = document.querySelector(`.search-box input`);

        btn.addEventListener(`click`, e => {
            console.log(document.activeElement);
            if (input !== document.activeElement) {
                input.focus()
            }
        })
    }());
    (function () {
        const searchBox = document.querySelectorAll('.search-box input[type="text"] + span');

        searchBox.forEach((elm) => {
            elm.addEventListener('click', () => {
                elm.previousElementSibling.value = '';
            });
        });
    }());

    (function () {
        const trigger = document.querySelector(`.products-trigger`)

        trigger.addEventListener(`click`, e => {
            trigger.classList.toggle('active')
        })
    }());

    (function () {
        const btn = document.querySelector(`.burger`)

        btn.addEventListener(`click`, e => {
            btn.classList.toggle('active')
        })
    }())
}