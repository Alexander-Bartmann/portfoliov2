// hero.component.ts
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule, MatIconModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  currentLang: string = 'de';

  constructor(
    private navigation: NavigationService,
    private translate: TranslateService
  ) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
    this.currentLang = this.translate.currentLang || 'de';
  }

  navigateTo(sectionId: string): void {
    this.navigation.navigateTo(sectionId);
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
  }
}
