import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1>
     Welcome Sumit {{sirname}}
    </h1>
  `,
  styles: [
  ]
})
export class TestComponent implements OnInit {
public sirname="Chauasiya"
  constructor() { }

  ngOnInit(): void {
  }

}
