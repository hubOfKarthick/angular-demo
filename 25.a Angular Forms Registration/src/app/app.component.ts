import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, EmailValidator } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      'name': new FormControl("", Validators.required),
      'email': new FormControl("Enter E-Mail", [Validators.required, Validators.email]),
      'gender': new FormControl("", Validators.required),
      'languages': new FormArray([
        new FormGroup({
          'english': new FormControl(true, Validators.required)
        }),
        new FormGroup({
          'tamil': new FormControl(true, Validators.required)
        })
      ]),
      'country': new FormControl()

    })

  }


  // Remove Icon Create install fontawsome package
  //   npm install @fortawesome/fontawesome-svg-core 
  //               @fortawesome/free-solid-svg-icons
  //               @fortawesome/angular-fontawesome --save




  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }

  }
}




