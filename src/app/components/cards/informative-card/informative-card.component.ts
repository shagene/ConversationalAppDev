import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informative-card',
  templateUrl: './informative-card.component.html',
  styleUrls: ['./informative-card.component.scss'],
})
export class InformativeCardComponent {
  @Input()
  title!: string;
  @Input()
  subtitle!: string;
}
