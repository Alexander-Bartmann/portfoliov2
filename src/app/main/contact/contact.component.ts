import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, TranslateModule],
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

  isFieldInvalid(field: string): boolean {
    if (!this.submitted) return false;
    return !(this as any)[field]?.toString().trim();
  }

  isCheckboxInvalid(): boolean {
    return this.submitted && !this.agreed;
  }

  onSubmit() {
    this.submitted = true;

    if (!this.name.trim() || !this.email.trim() || !this.message.trim() || !this.agreed) {
      return;
    }

    this.isSending = true;

    const payload = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.http.post('https://alexander-bartmann.de/sendMail.php', payload, {
      responseType: 'text'
    }).subscribe({
      next: () => {
        alert('Message sent successfully!');
        this.name = '';
        this.email = '';
        this.message = '';
        this.agreed = false;
        this.submitted = false;
        this.isSending = false;
      },
      error: (err) => {
        console.error('Error sending message:', err);
        alert('Oops! Something went wrong. Please try again later.');
        this.isSending = false;
      }
    });
  }
}
