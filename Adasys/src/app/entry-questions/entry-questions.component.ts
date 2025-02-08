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
  err: number = 0;
  constructor(public eq: EntryQuestionsService) { }

  ngOnInit(): void {
    this.getQuestion();
  }

  onSubmit(){
    let data = this.eq.form.value;

    this.eq.updateQuestions(data).then(res => {console.log(res); this.clear();}, err => {console.log(err); this.err = 1});
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

  edit(data)
  {
    this.eq.form.get('Question').setValue(data.payload.doc.data().Question);
    this.eq.form.get('Answer').setValue(data.payload.doc.data().Answer);
    this.eq.form.get('Option_A').setValue(data.payload.doc.data().Option_A);
    this.eq.form.get('Option_B').setValue(data.payload.doc.data().Option_B);
    this.eq.form.get('Option_C').setValue(data.payload.doc.data().Option_C);
    this.eq.form.get('Option_D').setValue(data.payload.doc.data().Option_D);
    this.eq.form.get('Difficulty').setValue(data.payload.doc.data().Difficulty);
    this.delete(data);
  }

}
