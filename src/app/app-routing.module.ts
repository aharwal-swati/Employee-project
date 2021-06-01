import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentModule } from './../app/components/student/student.module';


const routes: Routes = [
  { path: 'student', loadChildren: './../app/components/student/student.module#StudentModule' },

  { path: '**', loadChildren: './../app/components/student/student.module#StudentModule' },
  { path: '', loadChildren: './../app/components/student/student.module#StudentModule' },

];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
