import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  skills = [
    { name: 'Angular', img: 'assets/img/angular.png' },
    { name: 'TypeScript', img: 'assets/img/typescript.png' },
    { name: 'JavaScript', img: 'assets/img/Javascript.png' },
    { name: 'HTML5', img: 'assets/img/html.png' },
    { name: 'CSS', img: 'assets/img/css.png' },
    { name: 'Firebase', img: 'assets/img/firebase.png' },
    { name: 'Git', img: 'assets/img/git.png' },
    { name: 'Scrum', img: 'assets/img/scrum.png' },
  ];
}
