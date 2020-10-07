import Swiper, {
    Pagination,
    Navigation,
    Autoplay,
    Scrollbar,
    EffectFade
} from 'swiper';
// import Swiper styles

// configure Swiper to use modules
Swiper.use([Pagination, Navigation, Autoplay, Scrollbar, EffectFade]);

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
            nextEl: '.main-slider__arrow_down',
            prevEl: '.main-slider__arrow_up',
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
        grabCursor: `true`,
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
                slidesOffsetAfter: 0,
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
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
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
}