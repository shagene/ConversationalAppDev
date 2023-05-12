import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { NavRailService } from 'src/app/services/nav-rail.service';
import { ResponsiveService } from 'src/app/services/responsive.service'; // Add this import
import { take } from 'rxjs/internal/operators/take';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  isSmallScreen!: boolean;
  isMobile!: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private navRailService: NavRailService
  ) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
        this.navRailService.toggleNavRail(!this.isSmallScreen);
      });
  }



  toggleNavRail(): void {
    if (this.isSmallScreen) {
      this.navRailService.toggleNavRail(!this.navRailService.getCurrentNavRailState());
    } else {
      this.navRailService.collapsedState$.pipe(take(1)).subscribe((collapsed) => {
        this.navRailService.toggleCollapsedState(!collapsed);
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = this.breakpointObserver.isMatched(Breakpoints.XSmall);
    this.navRailService.toggleNavRail(!this.isSmallScreen);
  }
}