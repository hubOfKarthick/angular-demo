import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  public name ="Chennai";
  public message ="80 thousands per month";
  public person ={
    name:"Chennai",
    Age:"26",
    Salary:"12LPA"
  }
  public date = new Date();

  ngOnInit() {
  }

}
