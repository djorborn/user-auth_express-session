var burger = document.getElementsByClassName('navbar-burger')[0]
var menu = document.getElementsByClassName('navbar-menu')[0]
var links = menu.childNodes[0].childNodes
var title = document.title
// Add Active Class To Current Page
for (var i = 0; i < links.length; i++) {
  if (links[i].innerHTML === title) {
    links[i].classList.add('is-active')
  }
}
// Toggle Menu For Small Screens
burger.onclick = function () {
  burger.classList.toggle('is-active')
  menu.classList.toggle('is-active')
}
