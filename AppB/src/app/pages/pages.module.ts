import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { PersonalComponent } from './personal/personal.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistrodesiniestroComponent } from './registrodesiniestro/registrodesiniestro.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { HistorialsiniComponent } from './historialsini/historialsini.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    PersonalComponent,
    RegistroComponent,
    RegistrodesiniestroComponent,
    TutorialComponent,
    HistorialsiniComponent


    
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
