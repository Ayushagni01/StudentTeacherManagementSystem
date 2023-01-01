import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8080"

  constructor(private httpCleint: HttpClient) { }

   getStudentList(): Observable<Student[]>{
    return this.httpCleint.get<Student[]>(`${this.baseUrl}/students`)
   }

   createStudent(file:Blob,student : any): Observable<Object> {
    console.log(file);
    let f=new FormData()
    f.append("stud",JSON.stringify(student));
    f.append("files",file)
    
    return this.httpCleint.post(`${this.baseUrl}/addStudent`, f);
   }

   getStudentById(id: number): Observable<Student>{
    return this.httpCleint.get<Student>(`${this.baseUrl}/student/${id}`);
   }

   //get document by using id 
   getStudentByDocumentPDF(id:any):Observable<any>{
    return this.httpCleint.get(`${this.baseUrl}/pdf/${id}`,{responseType:'blob'})
   }

   getStudentByDocumentImage(id:any):Observable<any>{
    return this.httpCleint.get(`${this.baseUrl}/image/${id}`,{responseType:'blob'})
   }

}
