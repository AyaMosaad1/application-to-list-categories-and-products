import { Component } from '@angular/core';

import { Hero } from '../test/hero.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {

  name = 'Angular';
  
  myObjArray = [
    {id: 1, name: "Hardik" },
    {id: 2, name: "Vimal" },
    {id: 3, name: "Paresh" }
  ];
  
  updateItem(item:any){
    let index = this.myObjArray.indexOf(item);
    item.name = "Change Hardik";
    this.myObjArray[index] = item;
  
    console.log(this.myObjArray);
  }
}
