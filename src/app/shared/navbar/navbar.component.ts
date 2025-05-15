import { Component, HostListener, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  originalOffsetTop!: number;

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

  ngAfterViewInit() {
    // Warte bis die View geladen ist, dann berechne Offset
    this.originalOffsetTop = this.el.nativeElement.getBoundingClientRect().top + window.scrollY;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll >= this.originalOffsetTop) {
      this.renderer.addClass(this.el.nativeElement, 'fixed-navbar');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'fixed-navbar');
    }
  }
}
