import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepThreeComponent } from './step-three.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Store, StateObservable, State, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { reducer } from '../../reducers/step-one-reducer';

describe('StepThreeComponent', () => {
  let component: StepThreeComponent;
  let fixture: ComponentFixture<StepThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepThreeComponent],
      imports: [ReactiveFormsModule, HttpClientModule, StoreModule.forRoot({user: reducer})],
      providers: [
        { provide: StateObservable, useValue: State },
        { provide: Store, useValue: StateObservable },
        { provide: Router }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
