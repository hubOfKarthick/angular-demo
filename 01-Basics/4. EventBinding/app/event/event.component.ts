import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public status: string ='';
  public eventType ='';
  public name ='';
  public message ='';
 
  loginOnClick(a){
     alert( a.type);
    this.status = 'login button clicked';
    this.eventType = a.type;
    this.message = 'hello Event Binding'
   // alert('login button clicked');
  }

}
