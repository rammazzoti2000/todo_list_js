import addProjects from './addProject'
import ToDo from './todo'

class addToDos {

  static attribute() {
    var attr = 0;
    const cardBody = document.querySelector('.project-container');
    const children = cardBody.childNodes;

    let that = this;

    cardBody.addEventListener('click', (event) => {
      [...children].forEach(child => {
        child.classList.remove('border-primary');
      });
      event.target.classList.add('border-primary');
      var id = event.target.getAttribute('id');
      that.attr = id;
      addToDos.render(id);
      return attr;
    }, false)

    console.log('attr outside = ' + this.attr);
    return this.attr;
  }

  static add() {
    let that = this;
    var attr = addToDos.attribute();
    const form = document.querySelector('.collapse');
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const title = document.querySelector('.title').value;
      const text = document.querySelector('.text').value;
      const priority = document.querySelector('.priority').value;
      const date = document.querySelector('.date').value;

      const todo = new ToDo(title, text, priority, date);

      let result = that.attr;
      console.log('result = ' + result);
      // console.log(addProjects.projects);

      addProjects.projects[result].elements.push(todo);
      event.preventDefault();
      addToDos.render(result);
    })
    addToDos.deleteTodo();
  }

  static render(result) {
    const projects = addProjects.projects[result].elements;
    const form = document.querySelector('.to-do-list');
    console.log('projects = ' + projects);
    form.innerHTML = '';

    projects.forEach((project, index) => {
      const div = document.createElement('div');
      div.className = 'card mt-2';
      div.id = `${index}`;
      div.innerHTML = `
        <div class="card-body">
          <div class="todoProp">
            <span>${project.title}</span>
            <span>${project.description}</span>
            <span>${project.priority}</span>
            <span>${project.date}</span>
          </div>
          <div class="todoAction">
            <span class="edit" id="${index}"><i class="fas fa-pencil-alt"></i></span>
            <span class="delete" id="${index}"><i class="fas fa-trash-alt"></i></span>
          </div>
        </div>
      `;
      form.append(div);
    });
    console.log(form);

    // deleteItem.addEventListener('click', deleteTodo(result));
    return form;
  };

  static deleteTodo(result) {
    // const projects = addProjects.projects[result].elements;
    const todoAction = document.querySelector('.todoAction');
    // const todoNode = todoAction[1];
    // let item = this.getAttribute('id');
    // projects.splice(item, 1);
    console.log(todoAction);
    // console.log(todoNode);
    todoAction.addEventListener('click', function(event) {
      console.log(event.target);
      console.log('it works, hui, pitchka');
    });

  }

}

export default addToDos
