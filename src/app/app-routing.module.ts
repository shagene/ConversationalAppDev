import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ReportsComponent } from './views/reports/reports.component';
import { MoreInfoComponent } from './views/more-info/more-info.component';
import { NewPageComponent } from './views/new-page/new-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'more-info', component: MoreInfoComponent },
  { path: 'new-page', component: NewPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
