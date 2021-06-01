import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {StudentComponent} from './student.component';
import { TranslateModule } from '@ngx-translate/core';

const routes:Routes=[
  { path: 'student',component:StudentComponent},
  { path: '',component:StudentComponent},
]

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  
  declarations: [StudentComponent],
  exports:[]
})
export class StudentModule {
  constructor()
  {

  }
 }
