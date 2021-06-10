import { Injectable, inject, Inject } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http'
import { Observable, throwError } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
//import { _throw } from 'rxjs/observable/throw';

//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import {LocalstorageService} from './localstorage.service'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   url:any;
  constructor(
    @Inject(Http)
    private http: Http
   
  ) {}
 
   
  private setHeaders(isAuthorize:boolean,isContentAllowed:boolean=true): Headers {
       
    
    const headersConfig = {     
      'Accept': 'application/json',
    };
    if(isContentAllowed){
      headersConfig["Content-Type"]="application/json";
    }
   //if we need access token ----------!>
    //var accessToken = this.localstorage.getToken();
    // if(isAuthorize){
    //   if (accessToken) {
    //     headersConfig['Authorization'] = accessToken; 
    //   }       
    // }
    return new Headers(headersConfig);
  }

  setFileUploadHeaders(): HttpHeaders {
    var token = localStorage.getItem("loginToken");
    const headersConfig = {
    }
    if (token != null || token != undefined) {
      headersConfig['Authorization'] = token;

    }
    return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: any) {
    const statusCode = error.status;
    const body = error.json();
    const errors = {
      statusCode: statusCode,
      error: body
    };
   return throwError( (errors) )
  }
  
  
  get(path: string, params: URLSearchParams = new URLSearchParams(),isAuthorize:boolean=true): Observable<any> {
    return this.http.get(`${environment.base_url}${path}`, { headers: this.setHeaders(isAuthorize), search: params }
    ).pipe(catchError(this.formatErrors),map((res: Response) => { return res.json(); }));
  }
  
 
  post(path: string, body: Object = {},isAuthorize:boolean=true): Observable<any> {
    return this.http.post(`${environment.base_url}${path}`, JSON.stringify(body), { headers: this.setHeaders(isAuthorize) }
    ).pipe(catchError(this.formatErrors),map((res: Response) => { return res.json(); }));
  }

  put(path: string, body: object = {},isAuthorize:boolean=true): Observable<any> {
    return this.http.put(`${environment.base_url}${path}`, JSON.stringify(body), { headers: this.setHeaders(isAuthorize) })
    .pipe(catchError(this.formatErrors),map((res: Response) => { return res.json(); }));
  }

  delete(path: string, isAuthorize:boolean=true,isContentAllowed:boolean=true): Observable<any> {
    return this.http.delete(`${environment.base_url}${path}`, { headers: this.setHeaders(isAuthorize, isContentAllowed) })
    .pipe(catchError(this.formatErrors),map((res: Response) => { return res.json(); }));
  } 
}