/**
 * An example ES6 module:
 */
import fullpage from 'fullpage.js';
import pasteSVG from './utils/pasteSvg';
import sayHello from './utils/sayHello';
import sliders from './utils/sliders';
import header from './utils/header';
sayHello();
pasteSVG();
sliders();
header();

(function () {
	const header = document.querySelector(`.header`);
	if (screen.width > 1000 && document.querySelector(`#fullpage`)) {
		const fullPage = document.querySelector(`#fullpage`);
		new fullpage('#fullpage', {
			// paddingTop: `60px`,
			onLeave: function (section, origin, destination, direction) {
				setTimeout(() => {
					if (fullPage.style.transform !== `translate3d(0px, 0px, 0px)`) {
						header.classList.add(`fixed`)
					} else {
						header.classList.remove(`fixed`)
					}
				}, 500);
			}
		});
	} else {
		window.addEventListener(`scroll`, e => {
			if (window.scrollY > 0) {
				header.classList.add(`fixed`)
			} else {
				header.classList.remove(`fixed`)
			}
		})
	}
}())