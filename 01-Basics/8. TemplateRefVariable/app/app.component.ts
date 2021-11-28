import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template Reference Varibale Demo';

  getInputData(value){
    console.log(value);
    alert(value);
  }

}
