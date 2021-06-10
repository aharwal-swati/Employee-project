import { Component, OnInit } from '@angular/core';
import {Employee} from './../../../model/employee.model';
import { EmployeeManagementService } from 'src/app/service/Employee/employee-management.service';
import { Router } from '@angular/router';
import {AlertifyService} from './../../../service/Common/alertify.service'


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  employeeModel:Employee;
  constructor(private router:Router,private employeeManagementService:EmployeeManagementService, private alertify:AlertifyService) 
  {
     this.employeeModel= new Employee();
  }

  ngOnInit(): void {
  }

  addEmployee()
  {
    this.employeeManagementService.addEmployee(this.employeeModel).subscribe(
      res=>{
        this.alertify.success(res.message);
        this.backToEmployeeList();
      },
      error => {
         this.alertify.error(error.error.message);
    }
    )
  }

  backToEmployeeList()
  {
    this.router.navigate(['/employee/employee-list']);
  }

}
