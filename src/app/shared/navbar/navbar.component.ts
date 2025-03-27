import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  activeButton: string | null = null;

  setActive(buttonName: string) {
    this.activeButton = buttonName;
  }
}
