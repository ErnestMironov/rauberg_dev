import Swiper, {
    Pagination,
    Autoplay,
    Scrollbar,
    EffectFade
} from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';

// configure Swiper to use modules
Swiper.use([Pagination, Autoplay, Scrollbar, EffectFade]);

export default function sliders() {
    const mainSlider = new Swiper(`.main-slider`, {
        grabCursor: `true`,
        slideToClickedSlide: `true`,
        effect: 'fade',
        autoplay: {
            delay: 3000,
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