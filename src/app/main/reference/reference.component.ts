import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss'
})
export class ReferenceComponent {
  references = [
    {
      name: 'Finn G.',
      project: 'Join',
      text: 'Working with Alex on the Join project was a fantastic experience. He is structured, communicates well, and brings smart solutions to the table.',
      bgImg: 'img/Skill-Ellipse.png'
    },
    {
      name: 'Lea K.',
      text: 'Alex helped me a lot during my frontend project. His input on responsive design and component structure made a huge difference.',
      bgImg: 'img/Skill-Ellipse.png'
    },
    {
      name: 'Tim R.',
      text: 'During our sessions, Alex explained complex topics in a clear and friendly way. He was always patient and supportive!',
      bgImg: 'img/Skill-Ellipse.png'
    }
  ];
}
