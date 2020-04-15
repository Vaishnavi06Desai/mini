import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  newUser: any;
  constructor(private af: AngularFireAuth,
              private db: AngularFirestore, 
              private router: Router) { }

  createUser(user){
    this.af.createUserWithEmailAndPassword(user.email, user.password)
      .then(userCredential => {
        this.newUser = user;

        userCredential.user.updateProfile({
          displayName: user.firstName + ' ' + user.lastName
        });

        this.insertUserData(userCredential)
        .then(() => {
          this.router.navigate(['/home']);
        });

      })
      .catch(error => {
          this.eventAuthError.next(error);
      })
  }

  insertUserData(userCredential: firebase.auth.UserCredential){
      return this.db.doc(`Users/${userCredential.user.uid}`).set(
        {
          email: this.newUser.email,
          firstName: this.newUser.firstName,
          lastName: this.newUser.lastName,
        })
  }

  logout(){
    return this.af.signOut();
  }
}
