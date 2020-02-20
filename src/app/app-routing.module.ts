import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { StepThreeComponent } from './components/step-three/step-three.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { SummaryComponent } from './components/summary/summary.component';


const routes: Routes = [
  { path: '', component: StepOneComponent },
  { path: 'step-one', component: StepOneComponent },
  { path: 'step-two', component: StepTwoComponent },
  { path: 'step-three', component: StepThreeComponent },
  { path: 'summary/:ID', component: SummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
