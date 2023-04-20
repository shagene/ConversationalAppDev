import { Component, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { NavRailComponent } from './global-components/nav-rail/nav-rail.component';
import { NavRailService } from './services/nav-rail.service';
import { ThemeService } from './services/theme.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  @ViewChild(NavRailComponent)
  navRailComponent!: NavRailComponent;
  // fabColor = 'primary';

  constructor(
    private navRailService: NavRailService,
    public themeService: ThemeService
  ) {

  }


  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleNavRail() {
    this.navRailService.toggleNavRail(true); // Or use false to close the nav rail
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
