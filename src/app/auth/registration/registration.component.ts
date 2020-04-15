import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  authError: any;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    })
  }

  createUser(frm){
    this.auth.createUser(frm.value);
  }
}
