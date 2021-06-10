import { Component, OnInit } from '@angular/core';
import {Employee} from './../../../model/employee.model';
import { EmployeeManagementService } from 'src/app/service/Employee/employee-management.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  employeeModel:Employee;
  constructor(private router:Router,private employeeManagementService:EmployeeManagementService) 
  {
     this.employeeModel= new Employee();
  }

  ngOnInit(): void {
  }

  addEmployee()
  {
    this.employeeManagementService.addEmployee(this.employeeModel).subscribe(
      res=>{
        this.backToEmployeeList();
      }
    )
  }

  backToEmployeeList()
  {
    this.router.navigate(['/employee/employee-list']);
  }

}
