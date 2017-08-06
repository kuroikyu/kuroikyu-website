import './sass/main.sass'
import 'font-awesome/css/font-awesome.css'
import 'normalize.css'

// Smooth scroll-to
const projectsButton = document.querySelector('.scroll-to-projects');
const projectsArea = document.querySelector('#projects');

projectsButton.addEventListener('click', function(event) {
  event.preventDefault();
  projectsArea.scrollIntoView({
    behavior: 'smooth',
  });
});
