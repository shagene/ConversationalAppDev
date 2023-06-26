import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-other-card',
  templateUrl: './other-card.component.html',
  styleUrls: ['./other-card.component.scss']
})
export class OtherCardComponent {
  @Input() title!: string;
  @Input() content!: string;
  @Input() imageUrl?: string;
}
