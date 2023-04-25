import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{
  ID:any;
  student:any;
  isUpdated:boolean = false;
  
  constructor(myRoute:ActivatedRoute, public myService : DataService){
    this.ID = myRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.myService.GetStudentById(this.ID).subscribe({
      next:(data)=>{
        this.student = data;
      },
      error:(err)=>{
        console.log(err)
      },
    })
  }

  Update(name:any, age:any, email:any){
      this.isUpdated = true;
      let updatedStudent = {name, age, email};
      this.myService.UpdateStudent(this.ID, updatedStudent).subscribe();
  }
} 
