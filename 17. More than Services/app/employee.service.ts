import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployeeDetials (){

    return [ {
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
  }]
  }
}


