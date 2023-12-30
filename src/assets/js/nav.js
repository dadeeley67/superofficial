// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
const banner = document.querySelector(".scroll-banner");

var containerRect = CSnavbarMenu.getBoundingClientRect();

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle("cs-active");
	CSnavbarMenu.classList.toggle("cs-active");
	CSbody.classList.toggle("cs-open");
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// Change color of nav bar on scroll
// window.addEventListener('scroll', () => {

// });

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);

const scrollChange = scrollHeight / 12;

const step2 = scrollChange;
const step3 = step2 + scrollChange;
const step4 = step3 + scrollChange;
const step5 = step4 + scrollChange;
const step6 = step5 + scrollChange;
const step7 = step6 + scrollChange;
const step8 = step7 + scrollChange;
const step9 = step8 + scrollChange;
const step10 = step9 + scrollChange;
const step11 = step10 + scrollChange;
const step12 = step11 + scrollChange;

document.addEventListener('scroll', (e) => {
	const scroll = document.documentElement.scrollTop;
	if (scroll >= 90) {
		document.querySelector('body').classList.add('scroll')
	} else {
		document.querySelector('body').classList.remove('scroll')
	}

	if (scroll >= step2 && scroll < step3) {
		CSnavbarMenu.style.backgroundColor = "#95C3C3";
	} else if (scroll >= step3 && scroll < step4) {
		CSnavbarMenu.style.backgroundColor = "#9EBCC1";
	} else if (scroll >= step4 && scroll < step5) {
		CSnavbarMenu.style.backgroundColor = "#A6B4C0";
	} else if (scroll >= step5 && scroll < step6) {
		CSnavbarMenu.style.backgroundColor = "#AEADBE";
	} else if (scroll >= step6 && scroll < step7) {
		CSnavbarMenu.style.backgroundColor = "#B7A6BC";
	} else if (scroll >= step7 && scroll < step8) {
		CSnavbarMenu.style.backgroundColor = "#BF9FBA";
	} else if (scroll >= step8 && scroll < step9) {
		CSnavbarMenu.style.backgroundColor = "#C898B8";
	} else if (scroll >= step9 && scroll < step10) {
		CSnavbarMenu.style.backgroundColor = "#D091B6";
	} else if (scroll >= step10 && scroll < step11) {
		CSnavbarMenu.style.backgroundColor = "#D889B5";
	} else if (scroll >= step11 && scroll < step12) {
		CSnavbarMenu.style.backgroundColor = "#E182B3";
	} else if (scroll >= step12) {
		CSnavbarMenu.style.backgroundColor = "#e97bb1";
	} else {
		CSnavbarMenu.style.backgroundColor = "#8dcac5";
	}
});


// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active')
	}
	item.addEventListener('click', onClick)
}
