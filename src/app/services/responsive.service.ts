import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  [x: string]: any;
  private currentDeviceWidth: number = window.innerWidth;
  private isMobileSubject = new BehaviorSubject<boolean>(this.currentDeviceWidth < 960);
  private deviceWidthSubject = new BehaviorSubject<number>(this.currentDeviceWidth);

  updateIsMobile(width: number): void {
    this.currentDeviceWidth = width;
    this.isMobileSubject.next(this.currentDeviceWidth < 960);
  }

  updateDeviceWidth(width: number): void {
    this.deviceWidthSubject.next(width);
  }

  isMobile(): BehaviorSubject<boolean> {
    return this.isMobileSubject;
  }

  deviceWidth(): BehaviorSubject<number> {
    return this.deviceWidthSubject;
  }
}
