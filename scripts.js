const menu = document.getElementById("nav-menu");
const menuItems = menu.getElementsByTagName("a");

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function (e) {
    for (let j = 0; j < menuItems.length; j++) {
      menuItems[j].classList.remove("active");
    }

    this.classList.add("active");
  });
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

reveal();
