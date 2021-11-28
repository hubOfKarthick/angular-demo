import { Component, Input, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit, OnDestroy, OnChanges {
  @Input() name: string;

  ngOnChanges() {
    
    console.log('On Changes');

  }

  ngOnInit() {

    console.log('componenet Initialized');

  }

  ngOnDestroy() {
    console.log('componenet Destroyed');
  }
}
