import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOneComponent } from './step-one.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Store, StateObservable, State } from '@ngrx/store';
import { Router } from '@angular/router';

describe('StepOneComponent', () => {
  let component: StepOneComponent;
  let fixture: ComponentFixture<StepOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepOneComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: StateObservable, useValue: State },
        { provide: Store },
        { provide: Router }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
