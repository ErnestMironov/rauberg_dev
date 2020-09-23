/**
 * An example ES6 module:
 */
import fullpage from 'fullpage.js';
import pasteSVG from './utils/pasteSvg';
import sayHello from './utils/sayHello';
import sliders from './utils/sliders';
sayHello();
pasteSVG();
sliders();

new fullpage('#fullpage', {
	paddingTop: `60px`
});

//methods