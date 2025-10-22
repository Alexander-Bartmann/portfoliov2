import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { LegalNoticeComponent } from '../legal-notice/legal-notice.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private dialog: MatDialog) {}

  openLegalNotice() {
    this.dialog.open(LegalNoticeComponent, {
    });
  }
}
