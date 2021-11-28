import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit {

  constructor() { }
// ngOnChanges() {
//     console.log('Content onChanges');
//   }

  ngOnInit() {
    console.log('Content onInit');
  }

  // ngDoCheck() {
  //   console.log('Content doCheck');
  // }

  // ngAfterContentInit() {
  //   console.log('Content afterContentInit');
  // }

  // ngAfterContentChecked() {
  //   console.log('Content afterContentChecked');
  // }

  // ngAfterViewInit() {
  //   console.log('Content afterViewInit');
  // }

  // ngAfterViewChecked() {
  //   console.log('Content afterViewChecked');
  // }

  // log(cycleHook) {
  //   console.log(`%c${this.constructor.name}` + `: %c${cycleHook}`, 'background: #FF0000; color: #FFFF;', 'background: #222; color: #bada55; font-size: 1.01rem')
  // }

}