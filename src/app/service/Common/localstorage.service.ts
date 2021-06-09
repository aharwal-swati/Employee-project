import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  public IsLogin : Subject<boolean> = new Subject<boolean>();
  public leftMenu:string;  
  public loginToken:string="loginToken";
  public loginName:string="loginname";
  public userId:string="userid";
  public languageId:string="languageId";
  public registerName:string="registerUserName";
  public registerPassword:string="registerPassword";
  public registerSchoolName:string="registerSchoolName";
  public companyId:string="companyId";
  constructor() { }
  
setToken(token:string){
  localStorage.setItem(this.loginToken, token)  
 }

 setLeftmenu(value:string) {
   this.leftMenu=value;
 }

 setname(name:string){
   localStorage.setItem(this.loginName, name);
 }

 getname(){
  return localStorage.getItem(this.loginName);
 }

 setUserRole(role:string){
  localStorage.setItem("role", role);
}

   getUserRole()
  { 
  return localStorage.getItem("role");
  }

 getToken(){
  return localStorage.getItem(this.loginToken);
 }

 setUserId(userId:string)
 {
   localStorage.setItem(this.userId,userId)   
 }

getUserId()
 {
   return localStorage.getItem(this.userId);  
 }

 getRole()
 {
  return localStorage.getItem("role");
 }
 

 setCompanyId(companyId)
 {
  localStorage.setItem(this.companyId,companyId) 
 }

 getCompanyId()
 {
  return localStorage.getItem(this.companyId); 
 }

 removeCompanyId()
 {
  localStorage.removeItem(this.companyId);
 }
}
