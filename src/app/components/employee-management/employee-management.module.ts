import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {EmployeesListComponent} from './employees-list/employees-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';


const routes:Routes=[
  { path: 'employee-list',component:EmployeesListComponent},
  { path: 'employee-add',component:EmployeeAddComponent},
  { path: 'employee-detail',component:EmployeeDetailComponent},
  { path: '',component:EmployeesListComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class EmployeeManagementModule { }
