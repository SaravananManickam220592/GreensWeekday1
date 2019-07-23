import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  addStatus:boolean = false;
  students: any[] = [];

  constructor(private http: HttpClient) {
   this.getStudents();

  }

  getStudents(){
    var me = this;
    this.http.get('https://desolate-cove-18577.herokuapp.com/student').subscribe((res) => {
      me.students = res['students'];
    }, (err) => {

    }, () => {

    });
  }

  registerStudent(studentForm:NgForm){
    var student  = studentForm.value;
    this.http.post('https://desolate-cove-18577.herokuapp.com/student',student).toPromise().then((res)=>{
      this.addStatus= true;
      this.getStudents();
      var me=this;
      setTimeout(function(){
        me.addStatus= false;
      },2500);
      studentForm.resetForm();
        }).catch((err:Response)=>{
            
        });
  }

  ngOnInit() {
  }

}
