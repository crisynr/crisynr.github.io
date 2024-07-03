/* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the menu icon */
function ChangeNavbar() {
  var x = document.getElementById("nav-vertical");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
  