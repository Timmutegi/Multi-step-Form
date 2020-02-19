import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import * as UserActions from '../../actions/index.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {
  stepThree: FormGroup;
  submitted: boolean;
  user: User[];

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.stepThree = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      revenue: ['', Validators.required]
    });
    this.patchForm();
  }

  get f() {
    return this.stepThree.controls;
  }

  patchForm() {
    this.store.select('user').subscribe(state => {
      this.user = state;
    });
    console.log(this.user['0'].firstname);
    this.stepThree.patchValue({
      name: this.user['0'].companyName,
      location: this.user['0'].companyLocation,
      revenue: this.user['0'].companyRevenue,
    });
  }

  stepTwo() {
    this.router.navigate(['/step-two']);
  }

  save() {
    this.submitted = true;

    if (this.stepThree.invalid) {
      return;
    }

    this.store.dispatch(new UserActions.AddUser({
      firstname: this.user['0'].firstname,
      lastname: this.user['0'].lastname,
      email: this.user['0'].email,
      phone: this.user['0'].phone,
      KRA: this.user['0'].KRA,
      nationalID: this.user['0'].nationalID,
      companyName: this.stepThree.get('name').value,
      companyLocation: this.stepThree.get('location').value,
      companyRevenue: this.stepThree.get('revenue').value
    }));
  }

  submit() {
  }

}
