import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInterfaceComponent } from './test-interface.component';

describe('TestInterfaceComponent', () => {
  let component: TestInterfaceComponent;
  let fixture: ComponentFixture<TestInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
