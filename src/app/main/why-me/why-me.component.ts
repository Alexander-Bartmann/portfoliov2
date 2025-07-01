import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
  constructor(private navigation: NavigationService) {}
  navigateTo(sectionId: string): void {
    this.navigation.navigateTo(sectionId);
  }
}
