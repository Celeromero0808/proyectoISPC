import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

import { PagesModule } from '../pages/pages.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }
