import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  activeProject = 0;
  projects = [
  {
    id: 1,
    name: '1. Join',
    duration: '8 weeks',
    contentBlocks: [
      {
        title: 'About the project',
        description: 'Task manager ispired by the Kanban System. Create and organize tastks, using drag and drop functionality, assign users and categories.',
        ellipseImg: 'img/Ellipse 35.png'
      },
      {
        title: 'How I organized my work process',
        description: 'We planned and tracked our tasks using Trello. Each task was assigned to one of us and moved through columns like "To Do", "In Progress", and "Done". This made the workflow transparent and helped us stay organized and on schedule.',
        ellipseImg: 'img/Ellipse 35.png'
      },
      {
        title: 'My group work experience',
        description: 'I worked in a team of two developers. We split the work equally and communicated regularly about progress and challenges. Using Trello helped us coordinate efficiently and avoid overlaps or confusion.',
        ellipseImg: 'img/Ellipse 35.png'
      }
    ],
    techStack: [
      { name: 'JavaScript', img: 'img/Javascript.png' },
      { name: 'Firebase', img: 'img/firebase.png' }
    ],
    projectImg: 'img/Join.png',
    liveUrl: 'https://alexander-bartmann.de/Join',
    githubUrl: 'https://github.com/Alexander-aartmann/Join'
  },
  {
    id: 2,
    name: '2. Pollo Loco',
    duration: '5 weeks',
    contentBlocks: [
      {
        title: 'About the project',
        description: 'A simple Jump-and-Rund game based on an object-oriented approach. Help Pepe to find coins and Salsa bottles to fight against the evil chicken.',
        ellipseImg: 'img/Ellipse 35.png'
      },
      {
        title: 'How I organized my work process',
        description: 'I broke down the game into smaller modules like player movement, collision detection, and item collection. Each module was handled individually using object-oriented programming. I tracked progress with Trello and structured tasks clearly to stay focused.',
        ellipseImg: 'img/Ellipse 35.png'
      },
      {
        title: 'What I have learned',
        description: 'Through this project I gained a deeper understanding of canvas animations, frame-based logic, and class-based code structuring in JavaScript. It also taught me how to debug visual elements and build smooth interactions in 2D games.',
        ellipseImg: 'img/Ellipse 35.png'
      }
    ],
    techStack: [
      { name: 'JavaScript', img: 'img/Javascript.png' },
      { name: 'HTML', img: 'img/html.png' },
      { name: 'CSS', img: 'img/css.png' }
    ],
    projectImg: 'img/pollo-loco.png',
    liveUrl: 'https://alexander-bartmann.de/PolloLoco',
    githubUrl: 'https://github.com/Alexander-Bartmann/PolloLoco'
  },
  {
    id: 3,
    name: '3. Pokedex',
    duration: '2 weeks',
    contentBlocks: [
      {
        title: 'About the project',
        description: 'A Pokédex built with HTML, CSS and JavaScript that fetches and displays data from a public Pokémon API. Users can browse through all Pokémon, view their stats, and explore detailed information by clicking on each one.',
        ellipseImg: 'img/Ellipse 35.png'
      },
      {
        title: 'How I organized my work process',
        description: 'I started by analyzing the structure of the API and defining the required data. Then I planned the project layout and component behavior before writing the code. I used simple to-do lists to structure the development tasks and focused on one feature at a time.',
        ellipseImg: 'img/Ellipse 35.png'
      },
      {
        title: 'What I have learned',
        description: 'This project helped me strengthen my understanding of asynchronous JavaScript, working with APIs, and dynamically rendering content on the frontend. I also improved my skills in structuring clean HTML and responsive CSS layouts.',
        ellipseImg: 'img/Ellipse 35.png'
      }
    ],
    techStack: [
      { name: 'API', img: 'img/Api.png' },
      { name: 'JavaScript', img: 'img/Javascript.png' }
    ],
    projectImg: 'img/Pokedex.png',
    liveUrl: 'https://alexander-bartmann.de/Pokedex',
    githubUrl: 'https://github.com/Alexander-Bartmann/Pokedex'
  },
  ]
project: any;
block: any;
tech: any;
}
