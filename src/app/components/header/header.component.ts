import { Component, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  pageTitle!: string;
  @Input()
  breadcrumbs!: string[];

  constructor(public themeService: ThemeService) { }
}
