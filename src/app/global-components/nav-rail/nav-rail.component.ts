import { Component, OnInit } from '@angular/core';
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

  constructor(private navRailService: NavRailService, private responsiveService: ResponsiveService) { }

  ngOnInit(): void {
    this.navRailService.navRailState$.subscribe((state: boolean) => {
      console.log('NavRailComponent: state updated:', state);
      this.showNavRail = state;
    });

    this.isMobile = this.responsiveService.isMobile().getValue();
  }
}