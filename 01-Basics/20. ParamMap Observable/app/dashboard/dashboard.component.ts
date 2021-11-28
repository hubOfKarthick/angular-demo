import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  departments =[
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Angular"},
    {"id": 3, "name": "Angular"},
    {"id": 4, "name": "Angular"},
    {"id": 5, "name": "Angular"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
