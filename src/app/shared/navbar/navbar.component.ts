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
    private router: Router // <-- Router injizieren
  ) {
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('de');
    translate.use('de');
    this.currentLang = this.translate.currentLang || 'de';
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

    // Wenn wir nicht auf der Startseite sind, erst dorthin navigieren
    if (this.router.url !== '/' && this.router.url !== '') {
      this.router.navigate(['/']).then(() => {
        // kleiner Delay, damit das DOM gerendert ist bevor gescrollt wird
        setTimeout(() => {
          this.navigation.navigateTo(sectionId);
          // Menü schließen und body overflow wieder herstellen, falls es geöffnet war
          if (this.menuOpen) {
            this.menuOpen = false;
            document.body.style.overflowY = 'auto';
          }
        }, 80);
      });
    } else if (window.innerWidth <= 768) {
      // Wenn bereits auf Startseite: Menü schließen (mobile) und scrollen
      if (this.menuOpen) {
        this.menuOpen = false;
        document.body.style.overflowY = 'auto';
      }
      this.navigation.navigateTo(sectionId);
    } else {
      // bereits auf Startseite -> direkt scrollen
      this.navigation.navigateTo(sectionId);
    }
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
  }
}
