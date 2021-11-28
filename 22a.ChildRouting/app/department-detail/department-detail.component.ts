import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-department-detail',
  template: `
  <p>
    <button (click)="showOverview()">Overview</button>
    <button (click)="showContact()">Contact</button>
  </p>

  
   <router-outlet></router-outlet>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router :Router) { }

  ngOnInit() {

   }


showOverview(){
  this.router.navigate(['overview'], {relativeTo:this.route});
}

showContact(){
  this.router.navigate(['contact'], {relativeTo:this.route});
}
}
