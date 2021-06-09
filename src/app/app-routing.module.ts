import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeManagementModule } from './../app/components/employee-management/employee-management.module';


const routes: Routes = [
  { path: 'employee', loadChildren: './../app/components/employee-management/employee-management.module#EmployeeManagementModule' },
  { path: '**', loadChildren: './../app/components/employee-management/employee-management.module#EmployeeManagementModule' },
  { path: '', loadChildren: './../app/components/employee-management/employee-management.module#EmployeeManagementModule' },

];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
