import { Component, OnInit } from '@angular/core';
import { StudenServiceService } from '../studen-service.service';

@Component({
  selector: 'app-studen-details',
  templateUrl: './studen-details.component.html',
  styleUrls: ['./studen-details.component.css']
})
export class StudenDetailsComponent implements OnInit {
studentDetails:any[];

  constructor(private _studentDetails: StudenServiceService) {
   }

  ngOnInit() {
// this.studentDetails = this._studentDetails.getStudentDetials();
this._studentDetails.getStudentDetials()
//arrow syntax 
.subscribe(data => this.studentDetails = data);
  }

}
