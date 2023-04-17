import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = "";
  age = "";
  student = {};
  add() {
    if (+this.age < 40 && +this.age > 20 && this.name.length >= 3) {
      this.student = { name: this.name, age: this.age };
      this.send_data();
      this.age =  this.name = "";
      this.student = {};
    }
  }
  @Output() event = new EventEmitter();
  send_data() {
    this.event.emit(this.student);
  }
}
