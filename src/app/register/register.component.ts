import { UsernameValidator } from './../username.validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    name :  new FormControl('',[Validators.required,UsernameValidator.userNameSpaceValidation],UsernameValidator.userNameShouldBeUnique),
    mobile : new FormControl('',[Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  registerStudent(){
    console.log(this.registerForm.value);
  }

  get email(){
    return this.registerForm.get('email');
  }

  get name(){
    return this.registerForm.get('name');
  }

}
