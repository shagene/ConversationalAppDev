import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavRailService } from 'src/app/services/nav-rail.service';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-nav-rail',
  templateUrl: './nav-rail.component.html',
  styleUrls: ['./nav-rail.component.scss']
})
export class NavRailComponent implements OnInit {
  showNavRail = false;
  isMobile = false;
  isSmallScreen = false;
  collapsed = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private navRailService: NavRailService,
    private responsiveService: ResponsiveService,

  ) { }
  ngOnInit(): void {
    this.navRailService.navRailState$.subscribe((state: boolean) => {
      console.log('NavRailComponent: state updated:', state);
      this.showNavRail = state;
    });

    this.navRailService.collapsedState$.subscribe((state: boolean) => {
      console.log('NavRailComponent: collapsed state updated:', state);
      this.collapsed = state;
    });

    this.isMobile = this.responsiveService.isMobile().getValue();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = this.responsiveService.isMobile().getValue();
  }

  toggleCollapse(): void {
    this.navRailService.toggleCollapsedState(!this.collapsed);
  }
}