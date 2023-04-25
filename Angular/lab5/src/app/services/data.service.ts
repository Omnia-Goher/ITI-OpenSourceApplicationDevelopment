import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URL = "http://localhost:3000/students"; 
  
  constructor(private readonly client : HttpClient) { }

  AddNewStudent(newStudent:any){
    return this.client.post(this.URL ,newStudent);
  }

  UpdateStudent(id:any, updatedStudent:any){
    return this.client.put(this.URL + "/" + id, updatedStudent);
  }
  
  GetAllStudents(){
    return this.client.get(this.URL);
  }

  GetStudentById(id:any){
    return this.client.get(this.URL + "/" + id);
  }

  DeleteStudent(id:any){
    return this.client.delete(this.URL + "/" + id);
  }
}
