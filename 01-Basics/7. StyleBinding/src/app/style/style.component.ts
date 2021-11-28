import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {


  public hasError = true;
  public isBold = true;
  public color = 'pink';
  public fontSize:number = 25;
  public textStyle ={
  //only camel has to be used eg: fontStyle
    color:"brown",
    fontStyle:"italic"
}
  constructor() { }

  ngOnInit() {
  }

}
