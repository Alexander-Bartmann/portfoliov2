import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss',
})
export class ReferenceComponent {
  references = [
    {
      nameKey: 'references.finn.name',
      projectKey: 'references.finn.project',
      textKey: 'references.finn.text',
      bgImg: 'assets/img/Skill-Ellipse.png',
    },
    {
      nameKey: 'references.lea.name',
      projectKey: '',
      textKey: 'references.lea.text',
      bgImg: 'assets/img/Skill-Ellipse.png',
    },
    {
      nameKey: 'references.tim.name',
      projectKey: '',
      textKey: 'references.tim.text',
      bgImg: 'assets/img/Skill-Ellipse.png',
    },
  ];

  private startX = 0;
  private currentX = 0;
  private isDragging = false;
  private currentCard: HTMLElement | null = null;

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  onDragStart(event: TouchEvent | MouseEvent) {
    if (window.innerWidth > 768) return;

    this.isDragging = true;
    this.startX = 'touches' in event ? event.touches[0].clientX : event.clientX;

    const target = (event.target as HTMLElement).closest('.reference-card');
    if (target) {
      this.currentCard = target as HTMLElement;
      this.currentCard.classList.add('swiping');
    }
  }

  @HostListener('touchmove', ['$event'])
  @HostListener('mousemove', ['$event'])
  onDragMove(event: TouchEvent | MouseEvent) {
    if (!this.isDragging || !this.currentCard) return;

    this.currentX =
      'touches' in event ? event.touches[0].clientX : event.clientX;
    const diff = this.currentX - this.startX;

    const rotation = diff / 20;
    this.currentCard.style.transform = `translateX(calc(-50% + ${diff}px)) rotate(${rotation}deg)`;
  }

  @HostListener('touchend')
  @HostListener('mouseup')
  onDragEnd() {
    if (!this.isDragging || !this.currentCard) return;

    const diff = this.currentX - this.startX;

    if (Math.abs(diff) > 100) {
      if (diff > 0) {
        this.currentCard.classList.add('swiped-right');
      } else {
        this.currentCard.classList.add('swiped-left');
      }

      setTimeout(() => {
        const swipedCard = this.references.shift()!;
        this.references.push(swipedCard);

        const cards = document.querySelectorAll('.reference-card');
        cards.forEach((card) => {
          card.classList.remove('swiped-left', 'swiped-right');
          (card as HTMLElement).style.transform = '';
        });
      }, 400);
    } else {
      this.currentCard.style.transform = '';
    }

    this.currentCard.classList.remove('swiping');
    this.isDragging = false;
    this.currentCard = null;
  }
}
