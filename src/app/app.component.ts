import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Factory-Funktion für den Loader
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private translate: TranslateService) {
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('de');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/de|en/) ? browserLang : 'de');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
