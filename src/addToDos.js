import addProjects from './addProject';
import ToDo from './todo';
import Image1 from './edit.png';
import Image2 from './delete.png';
import EditForm from './editForm';

class addToDos {
  static attr = 0;

  static attribute() {
    const that = this;
    const cardBody = document.querySelector('.project-container');
    const children = cardBody.childNodes;

    cardBody.addEventListener('click', (event) => {
      [...children].forEach((child) => {
        child.classList.remove('bg-primary');
      });

      event.target.classList.add('bg-primary');

      const id = event.target.getAttribute('id');
      that.attr = id;
      addToDos.render(id);
    },
    false);

    return that.attr;
  }

  static add() {
    const that = this;
    const attr = addToDos.attribute();
    const form = document.querySelector('.collapse');
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const title = document.querySelector('.title').value;
      const text = document.querySelector('.text').value;
      const priority = document.querySelector('.priority').value;
      const date = document.querySelector('.date').value;

      if (title === '' && text === '' && date === '') {
        alert('Title and Description cannot be empty.'); // eslint-disable-line no-alert
        throw new Error('Title and Description cannot be empty.');
      } else {
        const todo = new ToDo(title, text, priority, date);
        const result = that.attr;
        addProjects.projects[result].elements.push(todo);
        localStorage.setItem('projects', JSON.stringify(addProjects.projects));
        addToDos.render(result);
        addToDos.clearFields();
      }
    });
    addToDos.deleteTodo();
    addToDos.editToDo(attr);
  }

  static render(result) {
    const projects = addProjects.projects[result].elements;
    const form = document.querySelector('.to-do-list');
    form.innerHTML = '';

    projects.forEach((project, index) => {
      const outerDiv = document.createElement('div');
      outerDiv.className = 'outer-div';
      const div = document.createElement('div');
      div.className = 'card';
      div.id = `${index}`;
      div.innerHTML = `
        <div class="card-body">
          <div class="todoProp">
            <h3 class="title">${project.title}</h3>
            <div>
              <span class="priority">${project.priority}</span>
              <span class="date">${project.date}</span>
            </div>
          </div>
          <div class="todoAction">
            <p class="description">${project.description}</p>
            <div>
              <span class="edit" id="${index}"><img src="${Image1}" class="edit" data-toggle="collapse" href="#collapseItems${index}" id="${index}"></span>
              <span class="delete" id="${index}"><img src="${Image2}" class="delete" id="${index}"></span>
            </div>
          </div>
        </div>
      `;
      form.append(outerDiv);
      outerDiv.append(div);
      outerDiv.append(EditForm.render(index));
    });

    return form;
  }

  static deleteTodo = () => {
    const todoAction = document.querySelector('.to-do-list');
    const that = this;
    todoAction.addEventListener('click', (e) => {
      if (e.target.className === 'delete') {
        const id = event.target.getAttribute('id'); // eslint-disable-line
        addProjects.projects[that.attr].elements.splice(id, 1);
        localStorage.setItem('projects', JSON.stringify(addProjects.projects));
        addToDos.render(that.attr);
      }
    });
  };

  static clearFields() {
    const toDoForm = document.querySelector('.to-do-list-form');
    const inputField = toDoForm.querySelectorAll('.bangau');
    inputField.forEach((elem) => {
      elem.value = '';
    });
  }

  static editToDo() {
    const that = this;
    const todoList = document.querySelector('.to-do-list');

    todoList.addEventListener('click', (e) => {
      if (e.target.className === 'edit') {
        const toDoForm = document.querySelector('.to-do-list');
        const todoAction = toDoForm.querySelectorAll('.to-do-list-form');
        const id = e.target.getAttribute('id');

        todoAction.forEach((elem) => {
          elem.addEventListener('submit', (e) => {
            e.preventDefault();

            const editItem = addProjects.projects[that.attr].elements[id];

            editItem.title = elem.querySelector('.title').value;
            editItem.description = elem.querySelector('.text').value;
            editItem.date = elem.querySelector('.date').value;
            editItem.priority = elem.querySelector('.priority').value;

            localStorage.setItem('projects', JSON.stringify(addProjects.projects));
            addToDos.render(that.attr);
          });
        });
      }
    });
  }
}

export default addToDos;
