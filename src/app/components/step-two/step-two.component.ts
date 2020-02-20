import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.state';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as UserActions from '../../actions/index.actions';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {
  stepTwo: FormGroup;
  submitted: boolean;
  user: User[];

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
     this.stepTwo = this.formBuilder.group({
      id:  ['', [Validators.required, Validators.pattern('([0-9]{8})')]],
      kra: ['', Validators.required],
    });

     this.patchForm();
  }

  get f() {
    return this.stepTwo.controls;
  }

  stepOne() {
    this.router.navigate(['/']);
  }

  patchForm() {
     this.store.select('user').subscribe(state => {
       this.user = state;
     });

     this.stepTwo.patchValue({
       id: this.user['0'].nationalID,
       kra: this.user['0'].KRA
     });
  }

  storestepTwo() {
    // this.patchForm();
    this.submitted = true;

    if (this.stepTwo.invalid) {
      return;
    }

    // console.log(this.stepTwo.value);
    this.store.dispatch(new UserActions.AddUser({
      firstname: this.user['0'].firstname,
      lastname: this.user['0'].lastname,
      email: this.user['0'].email,
      phone: this.user['0'].phone,
      KRA: this.stepTwo.get('kra').value,
      nationalID: this.stepTwo.get('id').value,
      companyName: '',
      companyLocation: '',
      companyRevenue: ''
    }));
  }

  next() {
    this.router.navigate(['/step-three']);
  }

}
