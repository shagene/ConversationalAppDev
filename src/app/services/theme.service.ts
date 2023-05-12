import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private activeTheme = 'theme1';
    themeChanged$: any;


    setActiveTheme(theme: string) {
        this.activeTheme = theme;
        document.documentElement.setAttribute('data-theme', this.activeTheme);
    }

    toggleTheme() {
        this.activeTheme = this.activeTheme === 'theme1' ? 'theme2' : 'theme1';
        this.setActiveTheme(this.activeTheme);
    }
}
