//Navbar
const navbarBtn = document.querySelector(`.navbar .btn`);
const navbarUl = document.querySelector(`.navbar .links`);
const navbarLinks = document.querySelectorAll(`.navbar .links a`);
const sections = document.querySelectorAll(`section`);

function handleNavbarBtn() {
  navbarUl.classList.toggle("opened");
  navbarBtn.classList.toggle("opened");
}

window.addEventListener(`scroll`, () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const cl = 270;
    const inView = rect.top <= cl && rect.bottom >= cl;
    if(!inView) return;
    navbarLinks.forEach(link => {
      link.classList.remove(`active`);
    });
    const activeLink = document.querySelector(`a[href="#${section.id}"]`);
    activeLink.classList.add(`active`);
  });
});