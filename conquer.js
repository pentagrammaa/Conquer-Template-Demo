function parallax() {
  var parllx1 = document.getElementById('parallax1');
  var parllx2 = document.getElementById('parallax2');
  var parllx3 = document.getElementById('parallax3');
  parllx1.style.top = -(window.pageYOffset / 2.5) + 'px';
  parllx2.style.top = -(window.pageYOffset / 2.5) + 840 + 'px';
  parllx3.style.top = -(window.pageYOffset / 2.5) + 1600 + 'px';
}

window.addEventListener('scroll', parallax, false);
document.getElementById('aboutUsButton').addEventListener('click', function () {
  var elmnt = document.getElementById('aboutUs');
  elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.getElementById('servicesButton').addEventListener('click', function () {
  var elmnt = document.getElementById('ourServices');
  elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.getElementById('contactButton').addEventListener('click', function () {
  var elmnt = document.getElementById('contact');
  elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
