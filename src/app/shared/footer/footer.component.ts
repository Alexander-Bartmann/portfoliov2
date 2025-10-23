import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LegalNoticeComponent } from '../legal-notice/legal-notice.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, LegalNoticeComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})


export class FooterComponent {
  showNotice = false;

  toggleNotice(event: Event) {
    event.preventDefault();
    this.showNotice = !this.showNotice;

    if (this.showNotice) {
      document.body.style.overflow = 'hidden'; // scroll deaktivieren
    } else {
      document.body.style.overflow = ''; // scroll wieder aktivieren
    }
  }
}
