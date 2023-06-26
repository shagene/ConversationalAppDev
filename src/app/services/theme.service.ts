import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'selectedTheme';
  private themes = ['theme1', 'theme2'];
  private activeTheme = new BehaviorSubject<string>('theme1');

  themeChanged$ = this.activeTheme.asObservable();

  constructor() {
    this.loadSavedTheme();
  }

  setActiveTheme(theme: string) {
    if (!this.themes.includes(theme)) {
      console.warn(`Attempted to set unknown theme: ${theme}`);
      return;
    }

    this.activeTheme.next(theme);
    document.documentElement.setAttribute('data-theme', theme);

    // Save the selected theme to localStorage
    localStorage.setItem(this.THEME_KEY, theme);
  }

  toggleTheme() {
    const currentIndex = this.themes.indexOf(this.activeTheme.getValue());
    const nextIndex = (currentIndex + 1) % this.themes.length;
    this.setActiveTheme(this.themes[nextIndex]);
  }
  private loadSavedTheme() {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme && this.themes.includes(savedTheme)) {
      this.setActiveTheme(savedTheme);
    } else {
      // Apply default theme if no theme was saved
      this.setActiveTheme(this.themes[0]);
    }
  }
}
