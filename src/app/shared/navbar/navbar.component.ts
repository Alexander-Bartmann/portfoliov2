import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  activeButton: string | null = null;
  isFixed = false;
  navbarHeight = 60; // Geschätzte Höhe deiner Navbar in px

  setActive(buttonName: string) {
    this.activeButton = buttonName;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    // Berechnet wann die Navbar den oberen Rand erreicht
    const shouldFix = scrollPosition > (documentHeight - viewportHeight - this.navbarHeight);

    this.isFixed = shouldFix;
    document.body.classList.toggle('scrolled', shouldFix);
  }
}
