import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngSwitch Sample';
  public color="Red";

  people: any[] = [
    {
      "name": "SpiderMan",
      "age": 25,
      "country": 'MARS'
    },
    {
      "name": "BatMan",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Jacky Chan",
      "age": 21,
      "country": 'China'
    },
    {
      "name": "Super Man",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "He Man",
      "age": 22,
      "country": 'USA'
    }
  ];
}
