import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class StuservicesService {

  constructor(private http:HttpClient) { }

  //load all the users here 
  //load all the categories
  public getAllRequests(id:any){
  return this.http.get(`${baseUrl}/student/details/${id}`);
  }
 
  public getAllsRequests(){
    return this.http.get(`${baseUrl}/student/details/`);
    }


  public addStudent(file:Blob,getStudent:any){
   
      console.log(file);
     let formD=new FormData();
     formD.append("file",file);
     formD.append("studata",JSON.stringify(getStudent))
    return this.http.post(`${baseUrl}/student/stud1/`,formD);
  }  


}
