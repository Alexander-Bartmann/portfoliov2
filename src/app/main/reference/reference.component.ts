import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss'
})
export class ReferenceComponent {
  references = [
    {
      nameKey: 'references.finn.name',
      projectKey: 'references.finn.project',
      textKey: 'references.finn.text',
      bgImg: 'assets/img/Skill-Ellipse.png'
    },
    {
      nameKey: 'references.lea.name',
      projectKey: '',  // Kein Projekt
      textKey: 'references.lea.text',
      bgImg: 'assets/img/Skill-Ellipse.png'
    },
    {
      nameKey: 'references.tim.name',
      projectKey: '',  // Kein Projekt
      textKey: 'references.tim.text',
      bgImg: 'assets/img/Skill-Ellipse.png'
    }
  ];
}
