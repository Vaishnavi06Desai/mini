import { Component, OnInit } from '@angular/core';
import { EntryQuestionsService } from './entry-questions.service';
import { rejects } from 'assert';

@Component({
  selector: 'app-entry-questions',
  templateUrl: './entry-questions.component.html',
  styleUrls: ['./entry-questions.component.scss']
})
export class EntryQuestionsComponent implements OnInit {

  questions;
  constructor(public eq: EntryQuestionsService) { }

  ngOnInit(): void {
    this.getQuestion();
  }

  onSubmit(){
    let data = this.eq.form.value;

    this.eq.updateQuestions(data).then(res => {console.log(res); this.clear();}, err => console.log(err));
  }

  getQuestion()
  {
    this.eq.getQuestions().subscribe(res => (this.questions = res));
  }

  clear()
  {
    this.eq.form.get('Question').setValue('');
    this.eq.form.get('Answer').setValue('');
    this.eq.form.get('Option_A').setValue('');
    this.eq.form.get('Option_B').setValue('');
    this.eq.form.get('Option_C').setValue('');
    this.eq.form.get('Option_D').setValue('');
    this.eq.form.get('Difficulty').setValue('');
  }

  delete(data)
  {
    this.eq.delete(data);
  }

}
