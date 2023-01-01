import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StuservicesService } from '../services/stuservices.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(private ss:StuservicesService) { }

  ngOnInit(): void {
  }

  name = new FormControl('');


  public getStudent={
    fname:'',
    lname:'',
    imageName:'',
    email:'',
  };

  file!:Blob;

  onFileChange(event:any){
   // console.log(event.target.files[0]);
    this.file=event.target.files[0];
    console.log(this.file);
  }


  //method which handle the 
  formSubmit(){
    alert("ayush");
     //this.ss.addStudent(this.file,this.getStudent);
    console.log("ayush agnihotri",this.getStudent.fname);
    this.ss.addStudent(this.file,this.getStudent).subscribe((data)=>{
      console.log(data);
      alert(data);
      //Swal.fire(this.getStudent.fname);
    },(error)=>{
      console.log("error in printing the data",error)
      alert("error here");
    });
  }

}
