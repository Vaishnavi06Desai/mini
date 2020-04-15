import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { AuthService } from './auth/auth.service';
import { map } from 'rxjs/operators';
import { EntryQuestionsComponent } from './entry-questions/entry-questions.component';
import { EntryQuestionsService } from './entry-questions/entry-questions.service';
import { TestInterfaceComponent } from './test-interface/test-interface.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    EntryQuestionsComponent,
    TestInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'mytestapp'),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule // Only required for storage features
  ],
  providers: [HomeService, AuthService, EntryQuestionsService, TestInterfaceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
