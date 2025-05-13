import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  skills = [
    { name: 'Angular', img: 'img/angular.png' },
    { name: 'TypeScript', img: 'img/typescript.png' },
    { name: 'JavaScript', img: 'img/Javascript.png' },
    { name: 'HTML5', img: 'img/html.png' },
    { name: 'CSS', img: 'img/css.png' },
    { name: 'Firebase', img: 'img/firebase.png' },
    { name: 'Git', img: 'img/git.png' },
    { name: 'Scrum', img: 'img/scrum.png' }
  ];
}
