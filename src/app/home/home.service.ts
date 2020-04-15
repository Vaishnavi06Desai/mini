import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { question_interface } from '../interface/question_interface';
import {HomeComponent} from './home.component'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class HomeService {


  constructor(private db: AngularFirestore,) { }

  getQuestions()
  {
    return this.db.collection('Questions', ref => ref.where('Difficulty', '==', 3).where('Visited', '==', false)).snapshotChanges();
  }

  getQuestion()
  {
    return this.getQuestions().      
    pipe(
      map(res => {let rand = this.random(res.length); console.log(res[rand].payload.doc.id); return [res[rand].payload.doc.data(), res[rand].payload.doc.id];}
      ));
  }

  update(id)
  {
    return this.db.collection("Questions").doc(id).update({Visited: false});
  }

  random(a) {
    return Math.floor(Math.random() * a);
  }

}
