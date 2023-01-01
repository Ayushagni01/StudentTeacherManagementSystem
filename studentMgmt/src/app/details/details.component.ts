import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { StuservicesService } from '../services/stuservices.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private ss:StuservicesService) { }


  getStudent:any;

  ngOnInit(): void {
   // this.ss.getAllRequests(1).subscribe((data)=>{
    this.ss.getAllsRequests().subscribe((data)=>{
      console.log(data);
      this.getStudent=data;
      //Swal.fire(this.getStudent.fname);
    },(error)=>{
      console.log("error in printing the data")
    });




  }

}
