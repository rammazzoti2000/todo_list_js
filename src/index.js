import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './scss/style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import addProject from './addProject';
import addToDos from './addToDos';

addProject.render();
addProject.add();
addToDos.render(0);
addToDos.add();
