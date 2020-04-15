import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { EntryQuestionsComponent } from './entry-questions/entry-questions.component';


const routes: Routes = [
  {
    path :'login',
    component: LoginComponent
  },
  {
    path :'register',
    component: RegistrationComponent
  },
  {
    path :'home',
    component: HomeComponent
  },
  {
    path: 'questions',
    component: EntryQuestionsComponent
  },
  {
    path :'',
    redirectTo: '/questions',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
