import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { WhyMeComponent } from "./why-me/why-me.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";
import { ReferenceComponent } from "./reference/reference.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeroComponent, WhyMeComponent, MySkillsComponent, MyProjectsComponent, ReferenceComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
