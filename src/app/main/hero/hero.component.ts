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
    private translate: TranslateService,
    private navigation: NavigationService,
  ) {
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('de');
    translate.use('de');
    this.currentLang = this.translate.currentLang || 'de';
    const savedLang = localStorage.getItem('selectedLang') || 'de';
    this.translate.use(savedLang);
    this.currentLang = savedLang;
  }

  navigateTo(sectionId: string): void {
    this.navigation.navigateTo(sectionId);
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('selectedLang', lang);
  }
}
