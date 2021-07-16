const mobileMenu = document.querySelector('.mobile-menu');
const list = document.querySelector('.navbar-list');

// function
function toggle() {
	list.classList.toggle('active');
}

// adding event listener
mobileMenu.addEventListener('click', toggle);
