import { Component, HostListener, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../../navigation.service'; // <--- import

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  activeButton: string | null = null;
  currentLang: string = 'de';

  constructor(
    private translate: TranslateService,
    private navigation: NavigationService
  ) {
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('de');
    translate.use('de');
    this.currentLang = this.translate.currentLang || 'de';
  }

  navigateTo(sectionId: string): void {
    this.activeButton = sectionId;
    this.navigation.navigateTo(sectionId);
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
  }
}
