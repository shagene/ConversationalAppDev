import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppBarComponent } from './global-components/app-bar/app-bar.component';
import { NavRailComponent } from './global-components/nav-rail/nav-rail.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ReportsComponent } from './views/reports/reports.component';
import { MoreInfoComponent } from './views/more-info/more-info.component';
import { SharedModule } from './components/shared.module';
import { ThemeService } from './services/theme.service';



@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    NavRailComponent,
    HomeComponent,
    AboutComponent,
    ReportsComponent,
    MoreInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    OverlayModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
