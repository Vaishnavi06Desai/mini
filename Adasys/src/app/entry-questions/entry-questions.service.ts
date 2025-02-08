import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { rejects } from 'assert';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class EntryQuestionsService {

  constructor(private db: AngularFirestore) { }

  form = new FormGroup({
    Question: new FormControl(''),
    Answer: new FormControl(''),
    Option_A: new FormControl(''),
    Option_B: new FormControl(''),
    Option_C: new FormControl(''),
    Option_D: new FormControl(''),
    Difficulty: new FormControl(''),
    Visited: new FormControl(false)
  })

  updateQuestions(data) {
    return new Promise<any>((resolve, reject) => {this.db.collection("Questions").add(data).then(() => {resolve("Success!!")}, err => reject(err));});
  }

  getQuestions(){
    return this.db.collection('Questions').snapshotChanges();
  }

  delete(data)
  {
    return this.db.collection("Questions").doc(data.payload.doc.id).delete();
  }
}
