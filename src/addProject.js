import Project from './project'

class addProject {

  static projects = [    //addPro
    {
      title: 'pirozhok',
      elements: [
        {
          title: 'Sample todo',
          description: 'Sample Desciption',
          priority: 'high',
          date: '2011-08-19',
        }
      ]    //addProjects.projects[0].elements
    }
  ]

  static add() {
    const project = document.getElementById('project-form');

    project.addEventListener('submit', (event) => {
      event.preventDefault();
      const title = document.querySelector('.project-input').value;
      if (title === '') {
        alert('Title cannot be empty.');
        throw new Error('Title cannot be empty.');
      } else {
        const projectElemet = new Project(title);
        this.projects.push(projectElemet);
        this.clearFields();
        return this.render();
      }
    });
  };

  static render() {
    const form = document.querySelector('.project-container');
    const div = document.createElement('div');
    div.className = 'card mt-2';

    const projects = this.projects;

    projects.forEach((project, index) => {
      div.id = `${index}`;
      div.innerHTML = `
        <p class="card-body" id="${index}">${project.title}</p>
      `;
      form.append(div);
    })
    return form;
  }

  static clearFields() {
    const title = document.querySelector('.project-input').value = '';
  }
};

export default addProject
