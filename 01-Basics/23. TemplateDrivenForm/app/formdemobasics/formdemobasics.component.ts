import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formdemobasics',
  templateUrl: './formdemobasics.component.html',
  styleUrls: ['./formdemobasics.component.css']
})
export class FormdemobasicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userRegistraion(regForm:NgForm){

    //Value is one of the properties of a FormGroup 
    console.log(regForm.value);
    //To check The control has been visited
    console.log("touched ::"+regForm.touched);
    console.log("untouched ::"+regForm.untouched);

    console.log("status ::"+regForm.status);

    //To check that The control's value has changed --> false else true
    console.log("pristine ::"+regForm.pristine);
    console.log("dirty ::"+regForm.dirty);

    //The control's value is valid
    console.log("valid ::"+regForm.valid);
    console.log("invalid ::"+regForm.invalid);
    
  }


}
