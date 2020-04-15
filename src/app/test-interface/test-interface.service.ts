import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import {TestInterfaceComponent} from './test-interface.component'
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestInterfaceService {


  constructor(private db: AngularFirestore,) {
  }
 
 diff$ = new BehaviorSubject<number>(1);
/*  getQuestions()
 {
   return this.db.collection('Questions', ref => ref.where('Difficulty', '==', 1).where('Visited', '==', false)).snapshotChanges();
 }
*/
 getQuestions_()
 {
   //const diff$ = new Subject<string>();
   const observe = this.diff$.pipe(switchMap(diff => this.db.collection('Questions', ref => ref.where('Difficulty', '==', diff).where('Visited', '==', false)).snapshotChanges()))
   //return this.db.collection('Questions', ref => ref.where('Difficulty', '==', this.diff).where('Visited', '==', false)).snapshotChanges();
   return observe.pipe(
     map(res => {let rand = this.random(res.length); console.log(res[rand].payload.doc.id); return [res[rand].payload.doc.data(), res[rand].payload.doc.id];}
     ));
 }
/* getQuestion()
 {
   return this.getQuestions().      
   pipe(
     map(res => {let rand = this.random(res.length); console.log(res[rand].payload.doc.id); return [res[rand].payload.doc.data(), res[rand].payload.doc.id];}
     ));
 }
*/
 update(id, diff)
 {
   this.diff$.next(diff);
   //this.getQuestions_();
   return this.db.collection("Questions").doc(id).update({Visited: true});
 } 

 updateinit(id)
 {
   return this.db.collection("Questions").doc(id).update({Visited: false});
 }

 random(a) {
   return Math.floor(Math.random() * a);
 }

 onStart()
 {
   return this.db.collection('Questions').snapshotChanges().pipe(
     map(res => res.map( a=> {return a.payload.doc.id;}
     )));
 } 
}
