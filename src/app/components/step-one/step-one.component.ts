import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppState } from '../../app.state';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as UserActions from '../../actions/index.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {
  stepOne: FormGroup;
  // user: Observable<User[]>;
  submitted: boolean;
  user: User[];

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.stepOne = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^([\+254])([0-9]{11})$')]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$')]]
    });
    this.patchForm();
  }

  get f() {
    return this.stepOne.controls;
  }

  patchForm() {
     this.store.select('user').subscribe(state => {
       this.user = state;
     });
     console.log(this.user['0'].firstname);
     this.stepOne.patchValue({
       firstname: this.user['0'].firstname,
       lastname: this.user['0'].lastname,
       phone: this.user['0'].phone,
       email: this.user['0'].email
     });
  }

  storeStepOne() {
    this.submitted = true;

    if (this.stepOne.invalid) {
      return;
    }

    // console.log(this.stepOne.value);
    this.store.dispatch(new UserActions.AddUser({
      firstname: this.stepOne.get('firstname').value,
      lastname: this.stepOne.get('lastname').value,
      email: this.stepOne.get('email').value,
      phone: this.stepOne.get('phone').value,
      KRA: '',
      nationalID: '',
      companyName: '',
      companyLocation: '',
      companyRevenue: ''
    }));

  }

  next() {
      this.router.navigate(['/step-two']);
  }
}
