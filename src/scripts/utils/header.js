export default function header() {
    (function () {
        const searchBox = document.querySelector('.search-box'),
            input = document.querySelector('.search-box input'),
            closeBtn = document.querySelector('.search-box__close');

        function close() {
            setTimeout(() => {
                if (searchBox.classList.contains(`active`)) {
                    searchBox.classList.remove(`active`);
                    input.value = ``;
                    input.blur();
                    closeBtn.removeEventListener(`click`, close)
                }
            }, 200)
        };

        searchBox.addEventListener(`click`, e => {
            setTimeout(() => {
                searchBox.classList.add(`active`)
                input.focus()
                closeBtn.addEventListener(`click`, close)
            })
        });

        document.addEventListener(`click`, e => {
            if (!searchBox.contains(e.target)) {
                close();
            }
        })
    }());

    (function () {
        const trigger = document.querySelector(`.products-trigger`),
            popup = document.querySelector(`.prod-popup`),
            closeBtn = document.querySelector(`.prod-popup__close`)

        function close() {
            popup.classList.remove(`active`);
            trigger.classList.remove(`active`);

        };

        closeBtn.addEventListener(`click`, close);

        trigger.addEventListener(`click`, e => {
            trigger.classList.toggle('active')
            popup.classList.add(`active`)
        })
    }());

    (function () {
        const btn = document.querySelector(`.burger`)

        btn.addEventListener(`click`, e => {
            btn.classList.toggle('active')
        })
    }())
}