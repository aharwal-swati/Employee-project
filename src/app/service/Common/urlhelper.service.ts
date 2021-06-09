import { environment } from '../../../environments/environment';
import {LocalstorageService} from '../../service/Common/localstorage.service'; 
import { Injectable, Inject } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class UrlHelperService { 
    
    constructor(private localstorage:LocalstorageService){
        
    };
    static baseUrl=environment.base_url;     
    static getallemployee              = 'getAll';
    static saveemployee                = 'create';
    static getemployee                 = 'get';
    
}   
