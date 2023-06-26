import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { Input1Component } from './input1/input1.component';
import { InformativeCardComponent } from './cards/informative-card/informative-card.component';
import { OtherCardComponent } from './cards/other-card/other-card.component';


@NgModule({
    declarations: [
        HeaderComponent,
        BannerComponent,
        Input1Component,
        InformativeCardComponent,
        OtherCardComponent,


    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule],
    exports: [
        HeaderComponent,
        BannerComponent,
        Input1Component,
        InformativeCardComponent,
        OtherCardComponent
    ]
})
export class SharedModule { }
