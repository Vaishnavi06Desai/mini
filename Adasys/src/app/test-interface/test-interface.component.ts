import { Component, OnInit } from '@angular/core';
import { TestInterfaceService } from './test-interface.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { question_interface } from '../interface/question_interface';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-test-interface',
  templateUrl: './test-interface.component.html',
  styleUrls: ['./test-interface.component.scss']
})
export class TestInterfaceComponent implements OnInit {

  id;
  x: number;
  answer;
  difficulty;
  correct:number;
  timeLeft: number = 600;
  interval;
  min:number;
  secs:number;
  questions: question_interface = { Question: '', Difficulty: 0 };
  constructor(private db: AngularFirestore,
    private ts: TestInterfaceService) {
      this.x = 1;
      this.correct = 0;
      this.ts.onStart().subscribe(res =>  res.map(a => {if(this.x == 1) {ts.updateinit(a)}}) )
  }

  ngOnInit(): void {
    this.getQuestion();
    this.startTimer();
  }

  form = new FormGroup({
    options: new FormControl(''),
  });

  getQuestion = () => {
    //this.ts.getQuestion().subscribe(res => pipe(a => {this.questions = a; return this.questions[0]}));
    //this.ts.getQuestion().subscribe(res =>{this.questions = res; console.log(this.questions[this.random(this.questions.length)].payload.doc.data().Qes);});
    //this.ts.getQuestion().pipe(map(res => res.map(a => {const quest = a.payload.doc.data(); return {quest}}))).subscribe(item => {item.forEach(i => {this.questions.push(i);});});
    //this.ts.getQuestion().pipe(map(res => res.map(a => { return a;}))).subscribe(res => (this.questions = res));
    this.ts.getQuestions_().subscribe(
        (res => { this.questions = res[0]; this.id = res[1]; console.log(res[1]); this.answer = this.questions.Answer; console.log(this.answer); this.difficulty = this.questions.Difficulty; console.log(this.difficulty);})
      );      
  }

  onSubmit()
  {
    this.x++;
   if(this.answer == this.form.value.options)
   {
    console.log("Correct!");
      this.correct++;
      if (this.difficulty != 3)
        {this.difficulty++;}     
   } 
   else{
     if(this.difficulty != 1)
      {this.difficulty--;}
   }

   if(this.x != 11)
   {
    this.ts.update(this.id, this.difficulty);
   }

   this.form.controls['options'].reset();
 }

 startTimer() {
  this.interval = setInterval(() => {
    if(this.timeLeft >= 0) {
      this.min=Math.trunc(this.timeLeft/60);
      this.secs=Math.trunc(this.timeLeft%60);
      this.timeLeft--;
    } else {
      //this.timeLeft = 60;
    }
  },1000)
}


}
