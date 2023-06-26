import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  activeTheme!: string;
  showThemeOptions = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.themeChanged$.subscribe(theme => {
      this.activeTheme = theme;
    });
  }

  toggleThemeOptions() {
    this.showThemeOptions = !this.showThemeOptions;
  }

  setTheme(theme: string) {
    this.themeService.setActiveTheme(theme);
    this.showThemeOptions = false;
  }
}
