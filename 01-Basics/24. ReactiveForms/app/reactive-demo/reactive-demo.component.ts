import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms'

@Component({
  selector: 'app-reactive-demo',
  templateUrl: './reactive-demo.component.html',
  styleUrls: ['./reactive-demo.component.css']
})
export class ReactiveDemoComponent implements OnInit {


signupForm:FormGroup;

FirstName:string="";
LastName:string="";
Email:string="";
Password:string="";
constructor(private frmbuilder:FormBuilder)
   {
  
   //This line of code takes the form control collection and groups into the formbuilder
    this.signupForm= frmbuilder.group({
      fname:['',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(3)])],
      lname:['',[Validators.required,Validators.maxLength(19)]],
      Emailid:['',[Validators.required,Validators.email]],
      userpassword:['',Validators.required]
    })
}

  ngOnInit() {
  }

  PostData(signupForm:NgForm)
  {
    sessionStorage.setItem("signInData",signupForm.value);

    console.log(signupForm.value);

    

  }

}
