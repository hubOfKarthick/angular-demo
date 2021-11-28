import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngTrackBy, Index, Odd or Even, First or Last ';
people:any[];

//The constructor() initialises the people property with 8 person objects
constructor(){
  this.people = [
    {
      "name": "John Peter",
      "age": 25,
      "gender": 'Male',
	  "id":1
    },
    {
      "name": "BatMan",
      "age": 32,
      "gender": 'male',
	  "id":2
    },
    {
      "name": "Jacky Chan",
      "age": 21,
      "gender": 'Male',
	  "id":3
    },
    {
      "name": "SuperMan",
      "age": 34,
      "gender": 'Male',
	  "id":4
    },
    {
      "name": "WonderWomen",
      "age": 22,
      "gender": 'Female',
	  "id":5
    },
	{
	"name":"Rathika",
	"age":"25",
	"gender":"female",
	"id":6
	},
	{
	"name":"Dhinesh",
	"age":"22",
	"gender":"male",
	"id":7
	},
	{
	"name":"SakthiMaan",
	"age":"30",
	"gender":"male",
	"id":8
  }
  ];
}

// This method will return the list of objects
getlatestData (){
  alert('getlatestData');
this.people= [
  {
    "name": "John Peter",
    "age": 25,
    "gender": 'Male',
  "id":1
  },
  {
    "name": "BatMan",
    "age": 32,
    "gender": 'male',
  "id":2
  },
  {
    "name": "Jacky Chan",
    "age": 21,
    "gender": 'Male',
  "id":3
  },
  {
    "name": "SuperMan",
    "age": 34,
    "gender": 'Male',
  "id":4
  },
  {
    "name": "WonderWomen",
    "age": 22,
    "gender": 'Female',
  "id":5
  },
{
"name":"Rathika",
"age":"25",
"gender":"female",
"id":6
},
{
"name":"Dhinesh",
"age":"22",
"gender":"male",
"id":7
},
{
"name":"SakthiMaan",
"age":"30",
"gender":"male",
"id":8
},
{
  "name":"Sinchan",
  "age":"12",
  "gender":"male",
  "id":9
  },
  {
    "name":"Sinchan",
    "age":"12",
    "gender":"male",
    "id":10
    }
];
}

// tracking by id not the object reference
trackBYId(index:number,people:any): string{
 // alert();
return people.id;
}

}
