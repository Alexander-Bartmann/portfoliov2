import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  activeButton: string | null = null;

  // Kombinierte Methode
  navigateTo(sectionId: string): void {
    this.activeButton = sectionId;

    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -window.innerHeight * 0.15; // z.B. Header-Höhe von 15vh
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
