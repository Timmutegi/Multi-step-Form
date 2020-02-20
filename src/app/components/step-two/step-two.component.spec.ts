import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoComponent } from './step-two.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Store, StateObservable, State } from '@ngrx/store';
import { Router } from '@angular/router';

describe('StepTwoComponent', () => {
  let component: StepTwoComponent;
  let fixture: ComponentFixture<StepTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepTwoComponent ],
      imports: [ReactiveFormsModule],
      providers: [{provide: StateObservable, useValue: State}, {provide: Store}, {provide: Router}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
