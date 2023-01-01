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

   createStudent(student : Student): Observable<Object> {
    return this.httpCleint.post(`${this.baseUrl}/student`, student);
   }

   getStudentById(id: number): Observable<Student>{
    return this.httpCleint.get<Student>(`${this.baseUrl}/student/${id}`);
   }
}
