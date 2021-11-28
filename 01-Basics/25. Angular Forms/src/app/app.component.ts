import { Component } from '@angular/core';
import { FormControl,FormGroup, FormArray, Validators, EmailValidator } from '@angular/forms';
// import { formArrayNameProvider, formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm:FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      'name' : new FormControl('', Validators.required),
      'email' : new FormControl('Enter E-Mail', [Validators.required,Validators.email]),
      'gender': new FormControl('Male', Validators.required),
      'languages' : new FormArray([
        new FormGroup({
          'english' : new FormControl(true,Validators.required)
        }),
        new FormGroup({
          'tamil' : new FormControl(true,Validators.required)
        })
      ]),
      'addresses' : new FormArray([
        new FormGroup({
          'line1' : new FormControl(),
          'line2' : new FormControl(),
          'country' : new FormControl(),
          'state' : new FormControl(),
          'city' : new FormControl()

        })

      ])
    });
  }

  createAddress() {
    return new FormGroup({
      'line1' : new FormControl(),
      'line2' : new FormControl(),
      'country' : new FormControl(),
      'state' : new FormControl(),
      'city' : new FormControl()
    })
  }

  addAddress(){
    let addressArray = this.userForm.get('addresses') as FormArray;
    addressArray.push(this.createAddress())
  }

// Remove Icon Create install fontawsome package
//   npm install @fortawesome/fontawesome-svg-core 
//               @fortawesome/free-solid-svg-icons
//               @fortawesome/angular-fontawesome --save


  removeAddress(index){
    let address =this.userForm.get('addresses') as FormArray;
    address.removeAt(index);
  }

  submitForm(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }
    
  }
}


 

