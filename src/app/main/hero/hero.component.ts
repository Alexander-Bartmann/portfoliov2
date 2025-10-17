// hero.component.ts
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../../navigation.service'; // <--- Import

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule, MatIconModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  menuOpen = false;

  constructor(private navigation: NavigationService) {} // <--- Inject

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
}
