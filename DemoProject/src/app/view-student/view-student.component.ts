import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  id!: number;
  student: Student = new Student();
  constructor(private studentService : StudentService,
    private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data => {
      this.student = data
    },
    error => console.log(error));
  }
  getType!:String;
  onChanges(id:any){
    console.log();
    //alert("the id is "+id);
    this.studentService.getStudentById(id).subscribe((response: any) => {
      // let blob = new Blob([response], { type:'application/pdf; charset=utf-8' });
      // let dataType = response.type;
      // console.log(dataType);
      // console.log(blob);
      //console.log(response.fileType);
      this.getType=response.fileType;
      console.log( this.getType);
      if(this.getType.endsWith(".pdf")){
        this.studentService.getStudentByDocumentPDF(id).subscribe((response: any) => {
          let blob:any = new Blob([response], { type: 'application/pdf; charset=utf-8' });
          const url = window.URL.createObjectURL(blob);
          window.open(url);
          saveAs(blob, `${id}.pdf`);
        
        });
      }
      else{
        this.studentService.getStudentByDocumentImage(id).subscribe((response: any) => {
          let blob:any = new Blob([response], { type: 'image/jpeg; charset=utf-8' });
          const url = window.URL.createObjectURL(blob);
          window.open(url);
          saveAs(blob, `${id}.jpeg`);
       
        });
      }


			}), (error: any) => console.log('Error downloading the file'),
			() => console.info('File downloaded successfully');
  };

  

}
