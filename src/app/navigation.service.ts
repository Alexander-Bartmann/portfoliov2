import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavigationService {

  navigateTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -window.innerHeight * 0.15; // gleicher Offset wie in Navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
