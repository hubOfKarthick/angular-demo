import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  valuesubmited:string="";

  ngOnInit() {
  }


  registerUser(form:NgForm)
  {
   
    this.valuesubmited=form.value;
  console.log(form.value);
  //console.log("valuesubmited ::"+JSON.stringify(this.valuesubmited));
  //form.reset();
  }

  resetForm(form:NgForm){
    //console.log("valid "+form.valid);
    form.reset();
  }

}
