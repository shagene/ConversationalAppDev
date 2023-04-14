import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input()
  icon!: string;
  @Input()
  text!: string;
  @Input()
  color!: string;
  @Input()
  colorClass!: string;
  @Input()
  moreInfoRoute!: string | null;

  public showBanner = true;

  closeBanner(): void {
    this.showBanner = false;
  }
}
