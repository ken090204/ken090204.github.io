let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Function to handle scroll and highlight the active menu link
window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`)?.classList.add('active');
            });
        }
    });

    // Close the navbar when scrolling
    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

// Toggle mobile menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close the navbar when a link is clicked (for mobile devices)
navLinks.forEach((link) => {
    link.onclick = () => {
        if (navbar.classList.contains('active')) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    };
});
