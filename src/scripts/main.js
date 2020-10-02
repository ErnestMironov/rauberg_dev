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

if (screen.width > 1000) {
	new fullpage('#fullpage', {
		// paddingTop: `60px`,
		onLeave: function (section, origin, destination, direction) {
			const header = document.querySelector(`.header`)
			const fullpage = document.querySelector(`#fullpage`)
			setTimeout(() => {
				if (fullpage.style.transform !== `translate3d(0px, 0px, 0px)`) {
					header.classList.add(`fixed`)
				} else {
					header.classList.remove(`fixed`)
				}
			}, 500);
		}
	});
}

//methods