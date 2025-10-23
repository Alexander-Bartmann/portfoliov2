import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LegalNoticeComponent } from './shared/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './shared/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
