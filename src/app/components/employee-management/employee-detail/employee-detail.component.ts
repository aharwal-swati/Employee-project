import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeManagementService } from 'src/app/service/Employee/employee-management.service';
import { Employee } from './../../../model/employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employeeId:number;
  employee:Employee;
  createdDate:string;
  updatedDate:string;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private employeeManagementService:EmployeeManagementService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.employeeId = params["employeeId"];
    })

    this.employee=new Employee();
   }

  ngOnInit(): void {

    console.log(this.employeeId);
    this.getEmployeeDetail();
  }

  getEmployeeDetail()
  {
    this.employeeManagementService.getEmployee(this.employeeId).subscribe(
      res=>{
        console.log(res);
        this.employee=res.data;
         this.createdDate=this.getDateFormat(this.employee.createdAt);
         this.updatedDate=this.getDateFormat(this.employee.updatedAt);
      }
    )
   
  }

  getDateFormat(date:string)
  {
    var d = new Date(this.employee.createdAt);
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear()
    var months = new Array("Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul", "Aug", "Sep",
      "Oct", "Nov", "Dec");  

    var Createddate = curr_date + "-" + months[curr_month] + "-" + curr_year;
    return Createddate;
  }

  backToEmployeeList()
  {
    this.router.navigate(['/employee/employee-list']);
  }
}
