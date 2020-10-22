import Swiper, {
    Pagination,
    Navigation,
    Autoplay,
    Scrollbar,
    EffectFade,
    Thumbs
} from 'swiper';
// import Swiper styles

// configure Swiper to use modules
Swiper.use([Pagination, Navigation, Autoplay, Scrollbar, EffectFade, Thumbs]);

export default function sliders() {
    const mainSlider = new Swiper(`.main-slider`, {
        grabCursor: `true`,
        slideToClickedSlide: `true`,
        effect: 'fade',
        loop: `true`,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.main-slider .slider-nav__arrow_down',
            prevEl: '.main-slider .slider-nav__arrow_up',
        },
        pagination: {
            el: '.main-slider__pag',
            type: 'bullets',
            clickable: `true`
        },
    });
    const popularSlider = new Swiper(`.popular__slider`, {
        slidesPerView: `auto`,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
        spaceBetween: 22,
        slideToClickedSlide: `true`,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.popular__slider-pag',
            type: 'bullets',
            clickable: `true`
        },
        breakpoints: {
            640: {
                spaceBetween: 10,
                slidesOffsetBefore: 0,
                slidesPerView: 2,
                slidesOffsetAfter: 0,
            },
            1024: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 4,
            }
        }
    });
    const categoriesSlider = new Swiper(`.categories__slider .swiper-container`, {
        slidesPerView: 1,
        grabCursor: `true`,
        slideToClickedSlide: `true`,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            640: {
                spaceBetween: 10,
                slidesPerView: 3,
            }
        }
    });
    const catalogSlider = new Swiper(`.catalog__slider`, {
        slidesPerView: `1`,
        autoplay: {
            delay: 1500,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });
    const pp_slider = new Swiper(`.product-page__slider`, {
        slidesPerView: `1`,
        thumbs: {
            swiper: {
                el: '.product-page__nav-slider .swiper-container',
                slidesPerView: 6,
                centerInsufficientSlides: true
            }
        }
    });

    (() => {
        if (document.querySelector(`.modal`)) {
            let appendSlide = 3;
            let prevArrow = document.querySelector(`.modal__left-footer .slider-nav__arrow_down`);
            let priceSelector = document.querySelector(`.modal .product-page__price`);
            let price = document.querySelector(`.modal .product-page__price`).textContent;
            price = parseInt(String(price).replace(/ /g, ''))

            const modalCountSlider = new Swiper(`.modal__left-footer .swiper-container`, {
                slidesPerView: 1,
                direction: `vertical`,
                centeredSlides: `true`,
                navigation: {
                    nextEl: '.modal__left-footer .slider-nav__arrow_up',
                    prevEl: '.modal__left-footer .slider-nav__arrow_down',
                },
                on: {
                    slideChange: function () {
                        this.appendSlide(`<div class="swiper-slide">${++appendSlide}</div>`)

                        if (this.realIndex == 0) {
                            prevArrow.style.visibility = `hidden`
                        } else {
                            prevArrow.style.visibility = `visible`
                        }

                        priceSelector.textContent = (price * ++this.realIndex).toLocaleString('ru')
                    }
                }
            })
        }
    })()
}