const mobileMenu = document.querySelector('.mobile-menu');
const list = document.querySelector('.navbar-list');
const navLink = document.querySelectorAll('.nav-link');

// function
function toggle() {
	list.classList.toggle('active');
}

// adding event listener
mobileMenu.addEventListener('click', toggle);
navLink.forEach((n) => n.addEventListener('click', toggle));
