import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  public value="";
  constructor() { }

  ngOnChanges() {
    console.log('Child onChanges');
  }

  ngOnInit() {
    console.log('Child onInit');
  }

  ngDoCheck() {
    console.log('Child doCheck');
  }

  ngAfterContentInit() {
    console.log('Child afterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Child afterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Child afterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Child afterViewChecked');
  }

  // log(cycleHook) {
  //   console.log(`%c${this.constructor.name}` + `: %c${cycleHook}`, 'background: #00FF00; color: #FFFF;', 'background: #222; color: #bada55; font-size: 1.01rem')
  // }

}