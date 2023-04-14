// import { Component, HostListener, OnDestroy, ViewChild } from '@angular/core';
// import { MatSidenav } from '@angular/material/sidenav';
// import { ResponsiveService } from './services/responsive.service';
// import { Subscription } from 'rxjs';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnDestroy {
//   @ViewChild('mobileSidenav')

//   mobileSidenav!: MatSidenav;
//   navRailExpanded = true;
//   isMobile: boolean = false;
//   deviceWidthPixels!: number;
//   private isMobileSubscription: Subscription;
//   private deviceWidthSubscription: Subscription;

//   constructor(private responsiveService: ResponsiveService) {
//     this.isMobileSubscription = this.responsiveService
//       .isMobile()
//       .subscribe((isMobile) => {
//         this.isMobile = isMobile;
//         this.navRailExpanded = !isMobile && !(window.innerWidth > 960 && window.innerWidth < 1280);
//       });

//     this.deviceWidthSubscription = this.responsiveService
//       .deviceWidth()
//       .subscribe((deviceWidth) => {
//         this.deviceWidthPixels = deviceWidth;
//       });
//   }

//   @HostListener('window:resize', ['$event'])
//   onResize(event: Event) {
//     const width = (event.target as Window).innerWidth;
//     this.responsiveService.updateIsMobile(width);
//     this.responsiveService.updateDeviceWidth(width);
//   }

//   navRailClass(): string {
//     return this.navRailExpanded ? '' : 'nav-rail-collapsed';
//   }

//   toggleNavRail() {
//     this.navRailExpanded = !this.navRailExpanded;
//   }

//   ngOnDestroy(): void {
//     if (this.isMobileSubscription) {
//       this.isMobileSubscription.unsubscribe();
//     }

//     if (this.deviceWidthSubscription) {
//       this.deviceWidthSubscription.unsubscribe();
//     }
//   }
// }


import { Component, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { NavRailComponent } from './global-components/nav-rail/nav-rail.component';
import { NavRailService } from './services/nav-rail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(NavRailComponent)
  navRailComponent!: NavRailComponent;
  constructor(private navRailService: NavRailService) { }


  toggleNavRail() {
    this.navRailService.toggleNavRail(true); // Or use false to close the nav rail
  }
}
