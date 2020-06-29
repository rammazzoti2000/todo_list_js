import addProjects from './addProject'
import ToDo from './todo'

class addToDos {


  static getAttribute() {
    var attr = 0;
    const cardBody = document.querySelector('.card');
    console.log(cardBody);

    cardBody.addEventListener('click', function() {
      console.log('It works');

      return attr = this.getAttribute('id');
    })
    console.log(attr);

    return attr;
  }

  static add() {
    const form = document.querySelector('.collapse');
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const title = document.querySelector('.title').value;
      const text = document.querySelector('.text').value;
      const priority = document.querySelector('.priority').value;
      const date = document.querySelector('.date').value;

      const todo = new ToDo(title, text, priority, date);

      const result = this.getAttribute();
      console.log('result = ' + result);
      console.log(addProjects.projects);

      addProjects.projects[result].elements.push(todo);
      return this.render();
    })
  }

  static render() {
    const result = this.getAttribute();
    const projects = addProjects.projects[result];
    const form = document.querySelector('.collapse');
    const div = document.createElement('div');
    div.className = 'card mt-2';

    projects.forEach(project => {
      div.id = `${index}`;
      div.innerHTML = `
        <p class="card-body">
          <span>${project.title}</span>
          <span>${project.description}<span>
          <span>${project.priority}<span>
          <span>${project.date}<span>
        </p>
      `;
      form.append(div);
    });
    return form;
  };

}

export default addToDos