import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../../navigation.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, TranslateModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);
  isSending = false;
  name = '';
  email = '';
  message = '';
  agreed = false;
  submitted = false;

  constructor(private navigation: NavigationService) {}

    navigateTo(sectionId: string): void { // <--- Neue Methode
    this.navigation.navigateTo(sectionId);
  }

  isFieldInvalid(field: string): boolean {
    if (!this.submitted) return false;
    return !(this as any)[field]?.toString().trim();
  }

  isCheckboxInvalid(): boolean {
    return this.submitted && !this.agreed;
  }

    onSubmit() {
      this.submitted = true;
      if (!this.isFormValid()) return;

      this.isSending = true;
      const payload = this.buildPayload();

      this.sendMail(payload);
    }

    private isFormValid(): boolean {
      return (
        this.name.trim().length > 0 &&
        this.email.trim().length > 0 &&
        this.message.trim().length > 0 &&
        this.agreed
      );
    }

    private buildPayload() {
      return {
        name: this.name,
        email: this.email,
        message: this.message
      };
    }

    private sendMail(payload: any) {
      this.http.post('https://alexander-bartmann.de/sendMail.php', payload, {
        responseType: 'text'
      }).subscribe({
        next: () => this.onMailSuccess(),
        error: (err) => this.onMailError(err)
      });
    }

    private onMailSuccess() {
      alert('Message sent successfully!');
      this.resetForm();
      this.isSending = false;
    }

    private onMailError(err: any) {
      console.error('Error sending message:', err);
      alert('Oops! Something went wrong. Please try again later.');
      this.isSending = false;
    }

    private resetForm() {
      this.name = '';
      this.email = '';
      this.message = '';
      this.agreed = false;
      this.submitted = false;
    }

}
