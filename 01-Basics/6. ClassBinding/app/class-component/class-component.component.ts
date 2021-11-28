import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-component',
  templateUrl: './class-component.component.html',
  styleUrls: ['./class-component.component.css']
})
export class ClassComponentComponent implements OnInit {

  public statusSuccess = "text-Success";
  public textError:boolean=false;
  public isFontChange:boolean=true;

  public multiClass = {
"text-Success":!this.textError,
"text-Error":this.textError,
"text-fontChange":this.isFontChange
  }
  constructor() { }

  ngOnInit() {
  }

}
