import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryQuestionsComponent } from './entry-questions.component';

describe('EntryQuestionsComponent', () => {
  let component: EntryQuestionsComponent;
  let fixture: ComponentFixture<EntryQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
