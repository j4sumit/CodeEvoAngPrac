import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1>
     Welcome Sumit {{sirname}}
    </h1>
    <input type="text" value="Chaurasiya" [disabled]="status">// propery binding accept boolean value also
    <input type="text" value="Chaurasiya" disabled={status}> //Interpolation only accept string and nnumber
  `,
  styles: [
  ]
})
export class TestComponent implements OnInit {
public sirname="Chauasiya";
public status =false;
  constructor() { }

  ngOnInit(): void {
  }

}
