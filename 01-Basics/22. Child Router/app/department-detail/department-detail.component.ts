import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
@Component({
  selector: 'app-department-detail',
  template: `
   <h3> you are selected department with id ={{departmentId}}</h3> 
  <p>
    <button (click)="showOverview()">Overview</button>
    <button (click)="showContact()">Contact</button>
  </p>

  
   <router-outlet></router-outlet>
   <button (click)="goPrevious()"> Previous</button>
   <button (click)="goNext()"> Next</button>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router :Router) { }

  ngOnInit() {
  //   let id=parseInt(this.route.snapshot.paramMap.get('id'));
  //   this.departmentId = id;
      this.route.paramMap.subscribe((params: ParamMap) => {
        let id = parseInt(params.get('id'));
        this.departmentId = id;

      });
   }

  goPrevious(){
    let PreviousId = this.departmentId - 1;
    this.router.navigate(['/departments', PreviousId]);
}
goNext(){
  let nextId = this.departmentId + 1;
  this.router.navigate(['/departments', nextId]);
}

showOverview(){
  this.router.navigate(['overview'], {relativeTo:this.route});
}

showContact(){
  this.router.navigate(['contact'], {relativeTo:this.route});
}
}
