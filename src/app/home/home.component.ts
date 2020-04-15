import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { User } from 'firebase';
import { HomeService } from './home.service';
import { question_interface } from '../interface/question_interface';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  id;
  x: number;
  questions: question_interface = { Question: '', Difficulty: 0 };
  constructor(private db: AngularFirestore,
    private hs: HomeService) {
      this.x = 1;
  }

  ngOnInit(): void {
    this.getQuestion();
  }

  getQuestion = () => {
    //this.hs.getQuestion().subscribe(res => pipe(a => {this.questions = a; return this.questions[0]}));
    //this.hs.getQuestion().subscribe(res =>{this.questions = res; console.log(this.questions[this.random(this.questions.length)].payload.doc.data().Qes);});
    //this.hs.getQuestion().pipe(map(res => res.map(a => {const quest = a.payload.doc.data(); return {quest}}))).subscribe(item => {item.forEach(i => {this.questions.push(i);});});
    //this.hs.getQuestion().pipe(map(res => res.map(a => { return a;}))).subscribe(res => (this.questions = res));
    this.hs.getQuestion().subscribe(
        (res => { this.questions = res[0]; this.id = res[1]; console.log(res[1]);})
      );      
  }

  random(a) {
    return Math.floor(Math.random() * a);
  }

  update(id)
  {
    this.hs.update(id);
    this.x++;
  }

}
