import { Component } from '@angular/core';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent {
  flutterState?: any;

  onFlutterAppLoaded(state: any) {
    this.flutterState = state;
  }
}
