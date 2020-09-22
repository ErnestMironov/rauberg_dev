/**
 * An example ES6 module:
 */
import fullpage from 'fullpage.js';
import pasteSVG from './utils/pasteSvg';
import sayHello from './utils/sayHello';
sayHello();
pasteSVG();

new fullpage('#fullpage', {
	//options here
});

//methods