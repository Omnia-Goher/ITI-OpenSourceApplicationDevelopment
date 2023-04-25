import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  Students:any;
  ID:any;
  constructor(public myService : DataService){}
  ngOnInit(): void {
    this.myService.GetAllStudents().subscribe({
      next:(data)=>{
        this.Students = data;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  Delete(id:any){
    this.ID = id;
    this.myService.DeleteStudent(this.ID).subscribe();
    location.reload();
  }
}
