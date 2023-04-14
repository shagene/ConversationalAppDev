import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { NavRailService } from 'src/app/services/nav-rail.service';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  isSmallScreen!: boolean;

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
    this.navRailService.toggleNavRail(!this.navRailService.getCurrentNavRailState());
  }
}