import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EmployeesListDataSource, EmployeesListItem } from './employees-list-datasource';
import { Employee } from 'src/app/model/employee.model';
import {EmployeeManagementService} from './../../../service/Employee/employee-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<Employee>();
  pageSize=20;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'employee_name','employee_salary','employee_age', 'action' ];
 
  constructor(private router:Router,private employeeManagementService:EmployeeManagementService)
  {

  }
  ngOnInit() {
    this.getAllEmployeeList();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getAllEmployeeList()
  {
    this.employeeManagementService.getAllEmployee().subscribe(
      (response: any)=>{
        this.dataSource.data = response.allEmployees;
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addNewEmployee()
  {
    this.router.navigate(['/employee/employee-add']);
  }

  employeeInfo(employeeDetail:Employee)
  {
    if(employeeDetail.id!=undefined)
    {
      this.router.navigate(['/employee/employee-detail'],{queryParams:{employeeId:employeeDetail.id}});
    }
    
  }
}
