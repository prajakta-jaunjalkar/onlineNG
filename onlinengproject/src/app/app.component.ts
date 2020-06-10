import { Component } from '@angular/core';

@Component( {
  selector: 'app-start',
  templateUrl: './app.component.html',
  //template: '<h1>Hello Angular..!</h1> <span style="color:blue;">{{title}}</span>', // view : UI
  //styles: [ 'h1 { color : Red; }' ]
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent
{
  title = "Angular Project";

  arr = [ 'pune', 'hyderabad', 'mumbai' ];

  mobparts = [ {
    id: 1001,
    name: 'Motorola g',
    description: '5.5 screen for Moto g',
    inStock: 5
  },
  {
    id: 1002,
    name: 'Samsung',
    description: '5 screen for Samsung',
    inStock: 8
  },
  {
    id: 1003,
    name: 'Nokia',
    description: 'Key pannel for Nokia',
    inStock: 0
  } ]
}
