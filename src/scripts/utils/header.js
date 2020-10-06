export default function header() {

    function canScrolling(bool) {
        if (bool) {
            if (screen.width < 1023) {
                document.body.style.overflow = `auto`
            } else {
                fullpage_api.setAllowScrolling(true);
            }
        } else {
            if (screen.width < 1023) {
                document.body.style.overflow = `hidden`
            } else {
                fullpage_api.setAllowScrolling(false);
            }
        }
    }

    (function () {
        const searchBox = document.querySelector('.search-box'),
            wrap = document.querySelector('.header__search-box'),
            input = document.querySelector('.search-box input'),
            closeBtn = document.querySelector('.search-box__close');

        function close() {
            setTimeout(() => {
                if (searchBox.classList.contains(`active`)) {
                    searchBox.classList.remove(`active`);
                    wrap.classList.remove(`active`);
                    input.value = ``;
                    input.blur();
                    closeBtn.removeEventListener(`click`, close)
                }
            }, 200)
        };

        searchBox.addEventListener(`click`, e => {
            setTimeout(() => {
                searchBox.classList.add(`active`)
                wrap.classList.add(`active`)
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
            closeBtn = document.querySelector(`.prod-popup__close`),
            menuItems = document.querySelectorAll(`.prod-popup__list-item`),
            previews = document.querySelectorAll(`.prod-popup__preview`)


        function close() {
            canScrolling(true)
            popup.classList.remove(`active`);
            trigger.classList.remove(`active`);

        };

        closeBtn.addEventListener(`click`, close);

        trigger.addEventListener(`click`, e => {
            canScrolling(false);
            trigger.classList.add('active')
            popup.classList.add(`active`)
        })

        menuItems.forEach(element => {
            element.addEventListener(`mouseenter`, () => {
                const preview = element.getAttribute(`data-prod-title`);

                previews.forEach(element => {
                    element.classList.remove(`active`)
                });
                document.querySelector(`[data-prod-preview="${preview}"]`).classList.add(`active`);
            })
        })
    }());

    (function () {
        const btn = document.querySelector(`.burger`),
            popup = document.querySelector(`.menu-popup`),
            closeBtn = document.querySelector(`.menu-popup__close`);

        function close() {
            canScrolling(true)
            popup.classList.remove(`active`);
            btn.classList.remove(`active`);

        };

        btn.addEventListener(`click`, e => {
            canScrolling(false)
            btn.classList.add('active')
            popup.classList.add('active')
        })

        closeBtn.addEventListener(`click`, close)

        popup.addEventListener(`click`, e => {
            if (popup === e.target) {
                close();
            }
        })
    }())
}