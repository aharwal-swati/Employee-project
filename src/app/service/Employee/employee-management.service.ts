import { Injectable } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { ApiService } from '../Common/api.service';
import { UrlHelperService } from '../Common/urlhelper.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeManagementService {

  constructor(private _api:ApiService) { }

  addEmployee(employeeDetails:Employee)
  {
    return this._api.post(UrlHelperService.saveemployee,employeeDetails);
  }

  getAllEmployee()
  {
    return this._api.get(UrlHelperService.getallemployee);
  }

  getEmployee(employeeId:number)
  {
    return this._api.get(UrlHelperService.getemployee+"/"+employeeId);
  }
}
