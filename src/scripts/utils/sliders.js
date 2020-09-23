import Swiper, { Pagination } from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';

// configure Swiper to use modules
Swiper.use([Pagination]);

export default function sliders() {
    const swiper = new Swiper(`.popular__slider`, {
        slidesPerView: `4`,
        spaceBetween: 10,
        grabCursor: `true`,
        pagination: {
            el: '.popular__slider-pag',
            type: 'bullets',
            clickable: `true`
          },
    }); 
}