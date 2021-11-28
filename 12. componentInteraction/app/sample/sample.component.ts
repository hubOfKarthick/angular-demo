import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  public name="dinesh";
  constructor() { }
//declare the same property which we declared in the appcomponent
//we have to declare the input decorator before the property as below and import it from the angular /core package.


@Input() public parentData;
//@Input('parentData') public Name;

// To send the data from child component to the parent component
//Using the EventEmitter and the @Output Decorator

@Output() public childComponentValue = new EventEmitter();


  ngOnInit() {
  }

  //send event on button click
  sendData(){
   
    this.childComponentValue.emit('From the Child Component');
  }
}
