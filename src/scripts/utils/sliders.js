import Swiper, {
    Pagination,
    Navigation,
    Autoplay,
    Scrollbar,
    EffectFade
} from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';

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
        spaceBetween: 10,
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