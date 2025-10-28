import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslateModule, NavbarComponent, FooterComponent, MatIcon],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent implements OnInit {
  close(): void {
    window.history.back();
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
