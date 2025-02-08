import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { EntryQuestionsComponent } from './entry-questions/entry-questions.component';
import { TestInterfaceComponent } from './test-interface/test-interface.component';
import { AboutUsComponent } from './about-us/about-us.component';


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
    path: 'test',
    component: TestInterfaceComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path :'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
