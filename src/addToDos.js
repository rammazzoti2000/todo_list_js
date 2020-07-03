import addProjects from "./addProject";
import ToDo from "./todo";
import Image1 from "./edit.png";
import Image2 from "./delete.png";
import EditForm from "./editForm";

class addToDos {
  static attr = 0;

  static attribute() {
    let that = this;
    const cardBody = document.querySelector(".project-container");
    const children = cardBody.childNodes;

    console.log("that attr = " + that.attr);

    cardBody.addEventListener(
      "click",
      (event) => {
        [...children].forEach((child) => {
          child.classList.remove("border-primary");
        });
        event.target.classList.add("border-primary");
        var id = event.target.getAttribute("id");
        that.attr = id;
        addToDos.render(id);
      },
      false
    );

    return that.attr;
  }

  static add() {
    let that = this;
    let attr = addToDos.attribute();
    const form = document.querySelector(".collapse");
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const title = document.querySelector(".title").value;
      const text = document.querySelector(".text").value;
      const priority = document.querySelector(".priority").value;
      const date = document.querySelector(".date").value;

      const todo = new ToDo(title, text, priority, date);
      let result = that.attr;
      console.log("result = " + result);

      addProjects.projects[result].elements.push(todo);
      event.preventDefault();
      addToDos.render(result);
      addToDos.clearFields();
    });
    addToDos.deleteTodo();
    addToDos.editToDo(attr);
  }

  static render(result) {
    const projects = addProjects.projects[result].elements;
    const form = document.querySelector(".to-do-list");
    form.innerHTML = "";

    projects.forEach((project, index) => {
      const outerDiv = document.createElement("div");
      outerDiv.className = "outer-div";
      const div = document.createElement("div");
      div.className = "card mt-2";
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
            <span class="edit" id="${index}"><img src="${Image1}" class="edit" data-toggle="collapse" href="#collapseItems${index}" id="${index}"></span>
            <span class="delete" id="${index}"><img src="${Image2}" class="delete" id="${index}"></span>
          </div>
        </div>
      `;
      form.append(outerDiv);
      outerDiv.append(div);
      outerDiv.append(EditForm.render(index));
    });
    console.log(form);

    return form;
  }

  static deleteTodo = () => {
    const todoAction = document.querySelector(".to-do-list");
    let that = this;
    todoAction.addEventListener("click", function (e) {
      if (e.target.className === "delete") {
        const id = event.target.getAttribute("id");
        addProjects.projects[that.attr].elements.splice(id, 1);
        addToDos.render(that.attr);
      }
    });
  };

  static clearFields() {
    const toDoForm = document.querySelector(".to-do-list-form");
    const inputField = toDoForm.querySelectorAll(".bangau");
    inputField.forEach((elem) => {
      elem.value = "";
    });
  }

  static editToDo() {

    let that = this;

    const todoList = document.querySelector(".to-do-list");
    const edit = document.querySelector(".edit");
    todoList.addEventListener("click", function (e) {
      if (e.target.className === "edit") {
        const toDoForm = document.querySelector(".to-do-list");
        const todoAction = toDoForm.querySelectorAll(".to-do-list-form");
        const id = e.target.getAttribute('id');
        console.log("todoaction = " + todoAction);

        todoAction.forEach((elem) => {
          console.log(elem);
          elem.addEventListener("submit", function (e) {
            e.preventDefault();
            console.log(elem);
            console.log(id);

            const editItem = addProjects.projects[that.attr].elements[id];
            console.log(editItem);

            editItem.title = elem.querySelector('.title').value;
            editItem.description = elem.querySelector('.text').value;
            editItem.date = elem.querySelector('.date').value;
            editItem.priority = elem.querySelector('.priority').value;
            console.log('aditItem = '+ editItem.title);

            addToDos.render(that.attr);
          });
        });
      }
    });
  }
}

export default addToDos;
