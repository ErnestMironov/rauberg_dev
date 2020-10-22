/**
 * An example ES6 module:
 */
import fullpage from 'fullpage.js';
import pasteSVG from './utils/pasteSvg';
import sayHello from './utils/sayHello';
import sliders from './utils/sliders';
import header from './utils/header';
import product_page from './utils/product-page';
import Choices from 'choices.js';

sayHello();
pasteSVG();
sliders();
header();
product_page();


(function () {
	const select = document.querySelector('select');

	if (select) {
		const choices = new Choices(select, {
			itemSelectText: 'Нажмите для выбора',
			searchEnabled: false,
		});
	}

}());

(function () {
	const header = document.querySelector(`.header`);
	const searchbox = document.querySelector(`.search-box`);

	function searchActive() {
		if (searchbox.classList.contains("active")) {
			return true
		} else {
			return false
		}
	}

	function headerRemoveFixed() {
		if (!searchActive()) {
			header.classList.remove(`fixed`)
		}
	}

	if (window.innerWidth > 1000 && window.innerHeight > 650 && document.querySelector(`#fullpage`)) {
		const fullPage = document.querySelector(`#fullpage`);
		new fullpage('#fullpage', {
			// paddingTop: `60px`,
			onLeave: function (section, origin, destination, direction) {
				setTimeout(() => {
					if (fullPage.style.transform !== `translate3d(0px, 0px, 0px)`) {
						header.classList.add(`fixed`)
					} else {
						headerRemoveFixed();
					}
				}, 500);
			}
		});
	} else {
		window.addEventListener(`scroll`, e => {
			if (window.scrollY > 0) {
				header.classList.add(`fixed`)
			} else {
				headerRemoveFixed();
			}
		})
	}
}())