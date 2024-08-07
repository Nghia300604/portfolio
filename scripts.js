const menu = document.getElementById('nav-menu');
const menuItems = menu.getElementsByTagName('a');

for (let i = 0; i < menuItems.length; i++) {
menuItems[i].addEventListener('click', function(e) {
    for (let j = 0; j < menuItems.length; j++) {
    menuItems[j].classList.remove('active');
    }

    this.classList.add('active');
});
}