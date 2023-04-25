import { Component } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  student = {
    name: "Omnia Goher",
    age: "23",
    email: "omnia@gmail.com",
  }
}
