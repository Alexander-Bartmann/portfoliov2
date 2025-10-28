import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../../navigation.service';
import { Router } from '@angular/router';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, MatIcon],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  activeButton: string | null = null;
  currentLang: string = 'de';
  menuOpen = false;

  constructor(
    private translate: TranslateService,
    private navigation: NavigationService,
    private router: Router
  ) {
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('de');
    translate.use('de');
    this.currentLang = this.translate.currentLang || 'de';
    const savedLang = localStorage.getItem('selectedLang') || 'de';
    this.translate.use(savedLang);
    this.currentLang = savedLang;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }

  navigateTo(sectionId: string): void {
    this.activeButton = sectionId;
    if (this.router.url !== '/' && this.router.url !== '') {
      this.routerNavigate(sectionId);
      return;
    }
    if (window.innerWidth <= 768) {
      if (this.menuOpen) {
        this.menuOpen = false;
        document.body.style.overflowY = 'auto';
      }
      this.navigation.navigateTo(sectionId);
      return;
    }
    this.navigation.navigateTo(sectionId);
  }

  private routerNavigate(sectionId: string): void {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.navigation.navigateTo(sectionId);
        if (this.menuOpen) {
          this.menuOpen = false;
          document.body.style.overflowY = 'auto';
        }
      }, 80);
    });
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('selectedLang', lang);
  }
}
