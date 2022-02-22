



window.onload = () => {

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
var rellax = new Rellax('.rellax');

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  })


  let image = document.querySelector('.image-background');
  console.log(image);

  /*window.addEventListener('scroll', (e) => {
    let scroll = window.scrollY;
    image.style.backgroundPositionY = `-$(scroll/2)px`;
  })*/

}



