import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './scss/style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import addProject from './addProject';
import addToDos from './addToDos';

addToDos.render(0);
addProject.render();
addProject.add();
// addToDos.attribute();
// document.addEventListener('change', addToDos.attribute());
addToDos.add();
