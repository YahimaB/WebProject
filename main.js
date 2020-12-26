var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var mybutton = document.getElementById("topButton")

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
	mybutton.style.display = "block";
  } else {
    navbar.classList.remove("sticky");
	mybutton.style.display = "none";
  }
}

window.onscroll = () => {
	myFunction()
}

const topFunction = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}