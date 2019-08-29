import styles from './../css/main.css';
import ScrollReveal from 'scrollreveal';
import MicroModal from 'micromodal';
import { tns } from "tiny-slider/src/tiny-slider";

// mobile menu toggle

var openmenu = document.querySelector('.mobile-menu-button');
var mobilemenu = document.querySelector('.mobile-menu');
var body = document.querySelector('body');

openmenu.onclick = function() {
  mobilemenu.classList.toggle('mobile-menu-toggle');
  body.classList.toggle('overflow-hidden');
}

var closemenu = document.querySelector('.close-menu');

closemenu.onclick = function() {
  mobilemenu.classList.toggle('mobile-menu-toggle');
  body.classList.toggle('overflow-hidden');
}

// END

// init micromodal's js

MicroModal.init();

// END

// Reveal sections on scroll

ScrollReveal().reveal('.fadeOnScroll');

// END

// Scroll anchor links

(function() {
	scrollTo();
})();

function scrollTo() {
	const links = document.querySelectorAll('.scroll');
	links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}

// END

var capabilityRightArrow = document.querySelector('.capa-arrow-right');
var capabilityLeftArrow = document.querySelector('.capa-arrow-left');
var capabilityInn0 = document.querySelector('.capabilities-inner-box-0');
var capabilityInn1 = document.querySelector('.capabilities-inner-box-1');
var capabilityInn2 = document.querySelector('.capabilities-inner-box-2');
// var capabilityInn3 = document.querySelector('.capabilities-inner-box-3');
// var capabilityInn4 = document.querySelector('.capabilities-inner-box-4');
var capabilityOut0 = document.querySelector('.capabilities-outer-box-0');
var capabilityOut1 = document.querySelector('.capabilities-outer-box-1');
var capabilityOut2 = document.querySelector('.capabilities-outer-box-2');
// var capabilityOut3 = document.querySelector('.capabilities-outer-box-3');
// var capabilityOut4 = document.querySelector('.capabilities-outer-box-4');

capabilityRightArrow.onclick = function() {
		// SECOND click of right arrow
		if (capabilityRightArrow.classList.contains('r1')) {
			capabilityRightArrow.classList.add('r2');
			capabilityRightArrow.classList.remove('r1');
			capabilityInn1.classList.remove('lg:shadow-lg');
			capabilityInn2.classList.add('lg:shadow-lg');
		}
		// // THIRD click of right arrow
		// else if (capabilityRightArrow.classList.contains('r2')) {
		// 	capabilityRightArrow.classList.add('r3');
		// 	capabilityRightArrow.classList.remove('r2');
		// 	capabilityInn2.classList.remove('lg:shadow-lg');
		// 	capabilityInn3.classList.add('lg:shadow-lg');
		// }
		// // FOURTH click of right arrow
		// else if (capabilityRightArrow.classList.contains('r3')) {
		// 	capabilityRightArrow.classList.add('r4');
		// 	capabilityRightArrow.classList.remove('r3');
		// 	capabilityInn3.classList.remove('lg:shadow-lg');
		// 	capabilityInn4.classList.add('lg:shadow-lg');
		// 	capabilityRightArrow.classList.add('opacity-25');
		// }
		// CLEAR right clicks
		else if (capabilityRightArrow.classList.contains('r2')) {
			capabilityRightArrow.classList.add('opacity-25');
		}
		// FIRST click of right arrow
		else {
			capabilityRightArrow.classList.add('r1');
			capabilityInn0.classList.remove('lg:shadow-lg');
			capabilityInn1.classList.add('lg:shadow-lg');
			capabilityLeftArrow.classList.remove('opacity-25');
		}
}

capabilityLeftArrow.onclick = function() {
	// if (capabilityRightArrow.classList.contains('r4')) {
	// 	capabilityRightArrow.classList.remove('r4');
	// 	capabilityRightArrow.classList.add('r3');
	// 	capabilityInn3.classList.remove('lg:shadow-lg');
	// 	capabilityInn2.classList.add('lg:shadow-lg');
	// 	
	// }
	// else if (capabilityRightArrow.classList.contains('r3')) {
	// 	capabilityRightArrow.classList.remove('r3');
	// 	capabilityRightArrow.classList.add('r2');
	// 	capabilityInn3.classList.remove('lg:shadow-lg');
	// 	capabilityInn2.classList.add('lg:shadow-lg');
	// }
	if (capabilityRightArrow.classList.contains('r2')) {
		capabilityRightArrow.classList.remove('r2');
		capabilityRightArrow.classList.add('r1');
		capabilityInn2.classList.remove('lg:shadow-lg');
		capabilityInn1.classList.add('lg:shadow-lg');
		capabilityRightArrow.classList.remove('opacity-25');
	}
	else { (capabilityRightArrow.classList.contains('r1'))
		capabilityRightArrow.classList.remove('r1');
		capabilityInn1.classList.remove('lg:shadow-lg');
		capabilityInn0.classList.add('lg:shadow-lg');
		capabilityLeftArrow.classList.add('opacity-25');
	}
}

capabilityRightArrow.onclick = function() {
	if (capabilityRightArrow.classList.contains('r1')) {
		capabilityRightArrow.classList.add('r2');
		capabilityRightArrow.classList.remove('r1');
		capabilityOut1.classList.remove('pop-shadow');
		capabilityOut2.classList.add('pop-shadow');
	}
	// else if (capabilityRightArrow.classList.contains('r2')) {
	// 	capabilityRightArrow.classList.add('r3');
	// 	capabilityRightArrow.classList.remove('r2');
	// 	capabilityOut2.classList.remove('pop-shadow');
	// 	capabilityOut3.classList.add('pop-shadow');
	// }
	// else if (capabilityRightArrow.classList.contains('r3')) {
	// 	capabilityRightArrow.classList.add('r4');
	// 	capabilityRightArrow.classList.remove('r3');
	// 	capabilityOut3.classList.remove('pop-shadow');
	// 	capabilityOut4.classList.add('pop-shadow');
	// 	capabilityRightArrow.classList.add('opacity-25');
	// }
	else if (capabilityRightArrow.classList.contains('r2')) {
		capabilityRightArrow.classList.add('opacity-25');
	}
	else {
		capabilityRightArrow.classList.add('r1');
		capabilityOut0.classList.remove('pop-shadow');
		capabilityOut1.classList.add('pop-shadow');
		capabilityLeftArrow.classList.remove('opacity-25');
	}
}

capabilityLeftArrow.onclick = function() {
// if (capabilityRightArrow.classList.contains('r4')) {
// 	capabilityRightArrow.classList.remove('r4');
// 	capabilityRightArrow.classList.add('r3');
// 	capabilityOut4.classList.remove('pop-shadow');
// 	capabilityOut3.classList.add('pop-shadow');
// 	capabilityRightArrow.classList.remove('opacity-25');
// }
// else if (capabilityRightArrow.classList.contains('r3')) {
// 	capabilityRightArrow.classList.remove('r3');
// 	capabilityRightArrow.classList.add('r2');
// 	capabilityOut3.classList.remove('pop-shadow');
// 	capabilityOut2.classList.add('pop-shadow');
// }
if (capabilityRightArrow.classList.contains('r2')) {
	capabilityRightArrow.classList.remove('r2');
	capabilityRightArrow.classList.add('r1');
	capabilityOut2.classList.remove('pop-shadow');
	capabilityOut1.classList.add('pop-shadow');
	capabilityRightArrow.classList.remove('opacity-25');
}
else { (capabilityRightArrow.classList.contains('r1'))
	capabilityRightArrow.classList.remove('r1');
	capabilityOut1.classList.remove('pop-shadow');
	capabilityOut0.classList.add('pop-shadow');
	capabilityLeftArrow.classList.add('opacity-25');
}
}

// Sliders

var sliderCapabilities = tns({
  "container": "#capabilities-slider-images",
  "loop": false,
  "edgePadding": 0,
  "items": 1,
  "controlsContainer": "#capabilities-slider-controls",
  "swipeAngle": false,
  "speed": 400,
  "mouseDrag": false,
  "arrowKeys": false,
  responsive: {
	768: {
		"edgePadding": 270,
	},
	992: {
		"edgePadding": 400,
	},
	1200: {
		"edgePadding": 600,
	},
	1440: {
		"edgePadding": 700,
	}
  }
});

// END