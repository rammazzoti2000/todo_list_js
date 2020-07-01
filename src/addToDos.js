import addProjects from './addProject'
import ToDo from './todo'
import Image1 from './edit.png';
import Image2 from './delete.png';

class addToDos {
  // const editImg = new Image();
  // editImg.src = Image1;
  //
  // const deleteImg = new Image();
  // delete.src = Image2;

  static attribute() {
    let attr = 0;
    // this.attr = 0;
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

    console.log('attr outside = ' + attr);
    // const a = .attr;
    console.log(this.attr);
    return this.attr;
  }

  static add() {
    let that = this;
    var attr = addToDos.attribute();
    console.log(attr);
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
    addToDos.deleteTodo(attr);
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
        <div class="card-body">deleteImg
          <div class="todoProp">
            <span>${project.title}</span>
            <span>${project.description}</span>
            <span>${project.priority}</span>
            <span>${project.date}</span>
          </div>
          <div class="todoAction">
            <span class="edit" id="${index}"><img src="${Image1}" class="edit" id="${index}"></span>
            <span class="delete" id="${index}"><img src="${Image2}" class="delete" id="${index}"></span>
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
    // const deleteItem = document.querySelector('.delete');
    const todoAction = document.querySelector('.to-do-list');
    console.log("resultDelete = " + result);
    // const todoNode = todoAction[1];
    // let item = this.getAttribute('id');
    // projects.splice(item, 1);
    // console.log(todoAction);
    // console.log(todoNode);
    // todoAction.addEventListener('click', function(event) {
    //   console.log(event.target);
    //   console.log('it works, hui, pitchka');
    // });

    todoAction.addEventListener('click', function(e, result) {
      console.log(e.target);
      console.log("result click event = " + result);
       if (e.target.className === 'delete') {
         const id = event.target.getAttribute('id');
         console.log('it works, hui, pitchka = ' + id);
         addProjects.projects[result].elements.splice(id, 1);
      }
    });
  };
};

export default addToDos
