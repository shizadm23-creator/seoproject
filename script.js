// Toggle the sidebar
function toggleNav() {
    document.getElementById("sidebar").classList.toggle("show-sidebar");
}

// Close sidebar if clicked outside
window.onclick = function(event) {
    var sidebar = document.getElementById("sidebar");
    var hamburger = document.getElementById("hamburger");

    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove("show-sidebar");
    }
};

// Add scroll event listener to window
window.onscroll = function() {
    myFunction();
};

// Get the navbar
var navbar = document.querySelector("header");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position
function myFunction() {
    if (window.scrollY > 50) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
}


