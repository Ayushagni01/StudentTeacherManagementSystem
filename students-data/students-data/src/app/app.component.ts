import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Students data';

  constructor(private router: Router) {}

  ngOnInit(): void {  }

  getStudentList(){
    this.router.navigate(['students']);
    const box = document.getElementById('data-page');

      if (box != null) {
        // ✅ Add class
        box.classList.add(
        'hidden'
        );
      }
  }
 
  createStudent(){
    this.router.navigate(['create-student']);
  }
}
