import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HistorialsiniComponent } from './pages/historialsini/historialsini.component';
import { LoginComponent } from './pages/login/login.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RegistrodesiniestroComponent } from './pages/registrodesiniestro/registrodesiniestro.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';

const routes: Routes = [{path:'Home',component: HomeComponent},
  {path:'Historialsini',component: HistorialsiniComponent},
  {path:'Login',component: LoginComponent},
  {path:'Personal',component: PersonalComponent},
  {path:'Registro',component: RegistroComponent},
  {path:'Registrodesiniestro',component:RegistrodesiniestroComponent},
  {path:'Tutorial',component: TutorialComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
