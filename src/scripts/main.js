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
		// paddingTop: `60px`
	});
}

//methods