import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentsComponent } from './components/students/students.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

let routes: Routes = [
  { path: "", component: RegistrationComponent },
  { path: "register", component: RegistrationComponent },
  { path: "students", component: StudentsComponent },
  { path: "students/:id", component: StudentDetailsComponent },
  { path: "**", component: ErrorComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ErrorComponent,
    FooterComponent,
    StudentDetailsComponent,
    StudentsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
