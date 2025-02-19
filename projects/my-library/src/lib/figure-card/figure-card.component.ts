import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-figure-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './figure-card.component.html',
  styleUrl: './figure-card.component.css'
})
export class FigureCardComponent {
  @Input() imgs: Array<any> = []
}
