import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { ErrorComponent } from './components/error/error.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';

import { RegistrationComponent } from './components/registration/registration.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';


const routes: Routes = [
  {path:'',component:StudentsComponent},
  {path:'students',component:StudentsComponent},
  {path:'students/create',component:RegistrationComponent},
  {path:'students/:id',component:StudentDetailsComponent},
  {path:'students/edit/:id',component:UpdateStudentComponent},
  {path:'**',component:ErrorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
