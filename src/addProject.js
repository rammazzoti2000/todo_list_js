import Project from "./project";

class addProject {

  static projects = localStorage.getItem("projects")
    ? JSON.parse(localStorage.getItem("projects"))
    : [
        {
          title: "pirozhok",
          elements: [
            {
              title: "Sample todo",
              description: "Sample Desciption",
              priority: "high",
              date: "2011-08-19",
            },
          ],
        },
      ];

  static localStoragify() {
    localStorage.setItem("projects", JSON.stringify(this.projects));
    let projects = JSON.parse(localStorage.getItem("projects"));
    return projects;
  }

  static add() {
    const project = document.getElementById("project-form");
    project.addEventListener("submit", (event) => {
      event.preventDefault();
      const title = document.querySelector(".project-input").value;
      if (title === "") {
        alert("Title cannot be empty.");
        throw new Error("Title cannot be empty.");
      } else {
        const projectElemet = new Project(title);
        this.projects.push(projectElemet);
        localStorage.setItem("projects", JSON.stringify(this.projects));
        this.clearFields();
        return this.render();
      }
    });
  }

  static render() {
    const form = document.querySelector(".project-container");
    form.innerHTML = '';

    localStorage.setItem("projects", JSON.stringify(this.projects));
    const projects = JSON.parse(localStorage.getItem("projects"));


    projects.forEach((project, index) => {
      const div = document.createElement("div");
      div.className = "card mt-2";
      div.id = `${index}`;
      div.innerHTML = `
        <p class="card-body" id="${index}">${project.title}</p>
      `;
      form.append(div);
    });
    return form;
  }

  static clearFields() {
    const title = (document.querySelector(".project-input").value = "");
  }
}

export default addProject;
