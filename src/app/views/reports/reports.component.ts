import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  cards = [
    {
      title: 'Card 1',
      content: 'This is card 1.',
      imageUrl: 'https://example.com/image1.jpg'
    },
    {
      title: 'Card 2',
      content: 'This is card 2.',
      imageUrl: 'https://example.com/image2.jpg'
    }];
}
