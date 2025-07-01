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
export class NavbarComponent implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private translate: TranslateService,
    private navigation: NavigationService // <--- injizieren
  ) {
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('de');
    translate.use('de');
  }

  originalOffsetTop!: number;
  activeButton: string | null = null;

  navigateTo(sectionId: string): void {
    this.activeButton = sectionId;
    this.navigation.navigateTo(sectionId); // <-- Service nutzen
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }

  ngAfterViewInit() {
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
