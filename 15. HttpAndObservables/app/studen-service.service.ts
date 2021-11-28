import { Injectable } from '@angular/core';
//import httpClient
import { HttpClient } from '@angular/common/http';
//import the interfce
import {IStudent} from './student';
//import RXJS from Observables
import{ Observable} from 'rxjs/Observable';

@Injectable()
export class StudenServiceService {

  private url:string ="/assets/data/studentData.json";
  //declare dependencies in the constructor
  constructor(private http: HttpClient) { }

  getStudentDetials () :Observable<IStudent[]>{
//adding type to the get request (array of IStudent)
    return this.http.get<IStudent[]>(this.url);
 
  }

  // getStudentDetials1(){
  //   return this.http.get(this.url);
  // }

}
