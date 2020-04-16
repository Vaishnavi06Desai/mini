import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: firebase.User;

  constructor(private auth: AuthService, 
    private router: Router,
    private afAuth: AngularFireAuth) { }

  ngOnInit(): void {

    this.auth.getUserState()
      .subscribe( user => {
        this.user = user;
      })
  }

  logout() {
    this.auth.logout();
  }

}
