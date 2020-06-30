import addProjects from './addProject'
import ToDo from './todo'

class addToDos {

  static attribute() {
    var attr = 0;
    const cardBody = document.querySelector('.project-container');
    const children = cardBody.children;
    let that = this;

    cardBody.addEventListener('click', (event) => {
      [...children].forEach(child => {
        child.classList.remove('border-success');
      });
      event.target.classList.add('border-success');
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
  }

  static render(result) {
    // const result = addToDos.attribute();
    const projects = addProjects.projects[result].elements;
    const form = document.querySelector('.to-do-list');
    console.log('projects = ' + projects);
    form.innerHTML = '';

    projects.forEach((project, index) => {
      const div = document.createElement('div');
      div.className = 'card mt-2';
      div.id = `${index}`;
      div.innerHTML = `
        <p class="card-body">
          <span>${project.title}</span>
          <span>${project.description}</span>
          <span>${project.priority}</span>
          <span>${project.date}</span>
        </p>
      `;
      form.append(div);
    });
    console.log(form);
    return form;
  };

}

export default addToDos