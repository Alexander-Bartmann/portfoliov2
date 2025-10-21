// hero.component.ts
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavigationService } from '../../navigation.service'; // <--- Import

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule, MatIconModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  menuOpen = false;
  currentLang: string = 'de'; // <-- hinzugefügt

  constructor(
    private navigation: NavigationService, // <--- Inject
    private translate: TranslateService
  ) {
    // Sprachen initialisieren und aktuelle Sprache setzen (wie in Navbar)
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
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

  navigateTo(sectionId: string): void { // <--- Neue Methode
    this.navigation.navigateTo(sectionId);
    if (window.innerWidth <= 768) {
      this.toggleMenu(); // Menü schließen nach Klick
    }
  }

  // Sprachwechsel für Template
  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
  }
}
