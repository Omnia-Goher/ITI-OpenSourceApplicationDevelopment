import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students=[
    {name:"Omnia Goher",age:"23",email:"omnia@gmail.com"},
    {name:"Eman Goher",age:"22",email:"eman@gmail.com"},
    {name:"Mohamed Goher",age:"55",email:"mohamed@gmail.com"}
  ];
}
