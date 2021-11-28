import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  constructor() { }
  ngOnChanges() {
    console.log('Parent onChanges');
  }

  ngOnInit() {
    console.log('Parent onInit');
  }

  ngDoCheck() {
    console.log('Parent doCheck');
  }

  ngAfterContentInit() {
    console.log('Parent afterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Parent afterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Parent afterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Parent afterViewChecked');
  }

  // log(cycleHook) {
  //   console.log(`%c${this.constructor.name}` + `: %c${cycleHook}`, 'background: #0000FF; color: #FFFF;', 'background: #222; color: #bada55; font-size: 1.01rem')
  // }

}