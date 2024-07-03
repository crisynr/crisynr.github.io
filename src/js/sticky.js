// When the user scrolls the page, execute stickyFunction
window.onscroll = function() {stickyFunction()};

// Get the sticky component
var sticky = document.getElementById("myStickybar");

// Get the offset position of the sticky component
var sticky = search.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}