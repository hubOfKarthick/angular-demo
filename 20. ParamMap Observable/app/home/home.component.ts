import { Component, OnInit } from '@angular/core';
import  {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  departments =[
    {"id":1, "name": "Angular"},
    {"id":2, "name": "Node"},
    {"id":3, "name": "Express"},
    {"id":4, "name": "MongoDB"},
    {"id":5, "name": "Bootstrap"}

  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(department){
    this.router.navigate(['/departments', department.id]);

  }
}



