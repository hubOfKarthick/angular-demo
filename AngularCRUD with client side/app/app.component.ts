import { Component , OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  // Array Declaration 
  myItems:any[] = new Array();

  // variables
  IsForUpdate: boolean = false;
  newItem: any = {};
  updatedItem;

  // Provide some values to the array
  constructor()
  {
    this.myItems.push( );
  }

   // To add new item in array
   AddItem() {
    this.myItems.push(
      this.newItem
    );
    this.newItem = {};
  }

   // When user selects edit option
   EditItem(i) {
    this.newItem.Value = this.myItems[i].Value;
    this.updatedItem = i;
    this.IsForUpdate = true;
  }

  // When user clicks on update button to submit updated value
  UpdateItem() {
    let data = this.updatedItem;
    for (let i = 0; i < this.myItems.length; i++) {
      if (i == data) {
        this.myItems[i].Value = this.newItem.Value;
      }
    }
    this.IsForUpdate = false;
    this.newItem = {};
  }

  // To delete specific item
  DeleteItem(i) {
    this.myItems.splice(i, 1);
  }
  
}
