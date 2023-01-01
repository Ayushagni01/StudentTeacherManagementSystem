import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  constructor(private studentService : StudentService,
    private router: Router){ }

  ngOnInit(): void {  }

    file!:Blob;


  onChangeFile(event:any){
    this.file=event.target.files[0];
  }

  saveStudent(){
    this.studentService.createStudent(this.file,this.student).subscribe(data => {
      alert("From Save student "+data);
      this.goToFrontPage();
    },
    error => alert(error));
  }

  // TO DO
  goToFrontPage(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log(this.student);
    this.saveStudent();
  }

}
