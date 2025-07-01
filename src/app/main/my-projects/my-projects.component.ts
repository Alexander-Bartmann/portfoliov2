import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  activeProject = 0;

  projects = [
    {
      id: 1,
      nameKey: 'myProjects.join.name',
      durationKey: 'myProjects.join.duration',
      contentBlocks: [
        {
          titleKey: 'myProjects.join.aboutTitle',
          descriptionKey: 'myProjects.join.aboutDescription',
          ellipseImg: 'assets/img/Ellipse 35.png'
        },
        {
          titleKey: 'myProjects.join.processTitle',
          descriptionKey: 'myProjects.join.processDescription',
          ellipseImg: 'assets/img/Ellipse 35.png'
        },
        {
          titleKey: 'myProjects.join.experienceTitle',
          descriptionKey: 'myProjects.join.experienceDescription',
          ellipseImg: 'assets/img/Ellipse 35.png'
        }
      ],
      techStack: [
        { name: 'JavaScript', img: 'assets/img/Javascript.png' },
        { name: 'Firebase', img: 'assets/img/firebase.png' }
      ],
      projectImg: 'assets/img/Join.png',
      liveUrl: 'https://alexander-bartmann.de/Join',
      githubUrl: 'https://github.com/Alexander-aartmann/Join'
    },
    {
      id: 2,
      nameKey: 'myProjects.pollo.name',
      durationKey: 'myProjects.pollo.duration',
      contentBlocks: [
        {
          titleKey: 'myProjects.pollo.aboutTitle',
          descriptionKey: 'myProjects.pollo.aboutDescription',
          ellipseImg: 'assets/img/Ellipse 35.png'
        },
        {
          titleKey: 'myProjects.pollo.processTitle',
          descriptionKey: 'myProjects.pollo.processDescription',
          ellipseImg: 'assets/img/Ellipse 35.png'
        },
        {
          titleKey: 'myProjects.pollo.learnedTitle',
          descriptionKey: 'myProjects.pollo.learnedDescription',
          ellipseImg: 'assets/img/Ellipse 35.png'
        }
      ],
      techStack: [
        { name: 'JavaScript', img: 'assets/img/Javascript.png' },
        { name: 'HTML', img: 'assets/img/html.png' },
        { name: 'CSS', img: 'assets/img/css.png' }
      ],
      projectImg: 'assets/img/pollo-loco.png',
      liveUrl: 'https://alexander-bartmann.de/PolloLoco',
      githubUrl: 'https://github.com/Alexander-Bartmann/PolloLoco'
    },
    {
      id: 3,
      nameKey: 'myProjects.pokedex.name',
      durationKey: 'myProjects.pokedex.duration',
      contentBlocks: [
        {
          titleKey: 'myProjects.pokedex.aboutTitle',
          descriptionKey: 'myProjects.pokedex.aboutDescription',
          ellipseImg: 'assets/img/Ellipse 35.png'
        },
        {
          titleKey: 'myProjects.pokedex.processTitle',
          descriptionKey: 'myProjects.pokedex.processDescription',
          ellipseImg: 'assets/img/Ellipse 35.png'
        },
        {
          titleKey: 'myProjects.pokedex.learnedTitle',
          descriptionKey: 'myProjects.pokedex.learnedDescription',
          ellipseImg: 'assets/img/Ellipse 35.png'
        }
      ],
      techStack: [
        { name: 'API', img: 'assets/img/Api.png' },
        { name: 'JavaScript', img: 'assets/img/Javascript.png' }
      ],
      projectImg: 'assets/img/Pokedex.png',
      liveUrl: 'https://alexander-bartmann.de/Pokedex',
      githubUrl: 'https://github.com/Alexander-Bartmann/Pokedex'
    }
  ];
}
