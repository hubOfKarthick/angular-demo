import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomPipeDemo';

  people: any[] = [
    {
      "name": "John Peter",
      "age": 25,
      "gender": 'Male'
    },
    {
      "name": "BatMan",
      "age": 32,
      "gender": 'male'
    },
    {
      "name": "Jacky Chan",
      "age": 21,
      "gender": 'Male'
    },
    {
      "name": "SuperMan",
      "age": 34,
      "gender": 'male'
    },
    {
      "name": "WonderWomen",
      "age": 22,
      "gender": 'Female'
    },
	{
	"name":"Rathika",
	"age":"35",
	"gender":"female"
	},
	{
	"name":"Dhinesh",
	"age":"22",
	"gender":"male"
	},
	{
	"name":"SakthiMaan",
	"age":"30",
	"gender":"male"
  }
  ];
}
