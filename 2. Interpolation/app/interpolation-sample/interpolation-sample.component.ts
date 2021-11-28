import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-sample',
  templateUrl: './interpolation-sample.component.html',
  styleUrls: ['./interpolation-sample.component.css']
})
export class InterpolationSampleComponent implements OnInit {

  public name:string = "Madras";
  public myName : string = null;
public screenUrl:string = window.location.href;

  constructor() { }

  ngOnInit() {
  }

  greetingsMethod(){

    return "hello "+this.name;
  }
}
