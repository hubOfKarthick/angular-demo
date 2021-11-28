import { Component, OnInit } from '@angular/core';
import {StudenServiceService} from'../studen-service.service';
@Component({
  selector: 'app-studen-list',
  templateUrl: './studen-list.component.html',
  styleUrls: ['./studen-list.component.css']
})
export class StudenListComponent implements OnInit {

  studentList:any[];

  constructor(private _StudenServiceService: StudenServiceService) { 
  }

  ngOnInit() {
  
    //this.studentList = this._StudenServiceService.getStudentDetials();
    this._StudenServiceService.getStudentDetials()
    .subscribe(data => this.studentList = data);
  }

}
